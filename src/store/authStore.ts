import { create } from "zustand";
import type { UserInfo } from "../types/auth";
import { clearToken, getToken, setToken } from "../utils/auth";

interface AuthState {
  token: string | null;
  user: UserInfo | null;
  setAuth: (token: string, user: UserInfo) => void;
  logout: () => void;
}

const useAuth = create<AuthState>((set) => ({
  token: getToken(),
  user: null,

  setAuth: (token, user) => {
    setToken(token);
    set({ token, user });
  },

  logout: () => {
    clearToken();
    set({ token: null, user: null });
  },
}));

export default useAuth;
