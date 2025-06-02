import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../store/authStore";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto  p-6 border rounded shadow">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <p>
        <strong>User ID:</strong> {user?.id}
      </p>
      <p>
        <strong>Name:</strong> {user?.name}
      </p>
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
