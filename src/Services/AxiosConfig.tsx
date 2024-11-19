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


api.interceptors.request.use((config) => {
  if (isIOS()) {
    const token = localStorage.getItem("accessToken"); 
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;
