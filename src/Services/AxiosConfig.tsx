import axios from "axios";
import { isIOS } from "../utils/utils";

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const getAccessToken = (): string | null => {
  if (isIOS()) {
    return localStorage.getItem("accessToken");
  }
  return null;
};

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
