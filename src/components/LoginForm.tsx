import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { fetchUserInfo, login } from "../api/auth";
import useAuth from "../store/authStore";
import { isValidEmail } from "../utils/validators";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const canSubmit = email && password && isValidEmail(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) {
      toast.error("Please enter a valid email and password.");
      return;
    }

    setLoading(true);

    try {
      const tokenData = await login(email, password);
      const userInfo = await fetchUserInfo(tokenData.token);
      setAuth(tokenData.token, userInfo);
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex  items-center justify-center lg:px-32 overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="w-full px-10 mx-auto p-6 flex flex-col-reverse md:flex-row md:items-center md:space-x-8"
      >
        <div className="w-full md:w-[50%]">
          <div className="text-center">
            <div className="text-[35px] text-[#1A1A1E]">Welcome back</div>
            <div className="text-[#62626B] text-[17px] mb-6">
              Step into our shopping metaverse for an unforgettable shopping
              experience
            </div>
          </div>
          <div className="mb-4 relative">
            <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 bg-[#FFFFFF66] p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>

          <div className="mb-6 relative">
            <MdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              id="password"
              type="password"
              className="w-full border border-gray-300 bg-[#FFFFFF66] p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            disabled={!canSubmit || loading}
            className={`w-full py-3 rounded-lg text-white  transition-colors duration-200
         ${
           canSubmit && !loading
             ? "bg-[#9414FF] hover:bg-[#7c10d6] cursor-pointer"
             : "bg-[#9414FF] cursor-not-allowed"
         }
  `}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <div className="text-center mt-6 text-[#62626B] text-[14px]">
            Don't have an account? Sign up
          </div>
        </div>

        <div className="mt-6 w-full md:w-[65%] flex justify-center items-center flex-col ">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="object-contain w-full h-[20vh] md:h-[78vh] -translate-y-[50px] "
          />
          <img
            src="/images/logo-text.png"
            alt="Logo"
            className="object-contain w-[150px] md:w-[240px] mt-4 -translate-y-[100px] md:-translate-y-[200px]"
          />
        </div>
      </form>
      <div className="absolute top-0 right-[5%] md:right-[13%] w-full md:w-[37%] h-[400px] bg-gradient-to-b from-[#E477F6] to-transparent opacity-40 md:opacity-60 rounded-[30px] blur-3xl z-10" />
      <div className="absolute bottom-0 right-[0px] w-[200px] h-[200px] bg-gradient-to-t from-[#a36dac] to-transparent opacity-40 rounded-t-full blur-2xl z-10" />
    </div>
  );
};

export default LoginForm;
