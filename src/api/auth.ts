import axios from "axios";
import type { TokenResponse, UserInfo } from "../types/auth";
const BASE_URL = "https://api-yeshtery.dev.meetusvr.com/v1";

export async function login(
  email: string,
  password: string
): Promise<TokenResponse> {
  const response = await axios.post<TokenResponse>(
    `${BASE_URL}/yeshtery/token`,
    {
      email,
      password,
      isEmployee: true,
    }
  );
  return response.data;
}

export async function fetchUserInfo(token: string): Promise<UserInfo> {
  const response = await axios.get<UserInfo>(`${BASE_URL}/user/info`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
