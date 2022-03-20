import axios from "axios";
import { config } from "./apiConfig";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: config.api_server,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.message === "Network Error") {
      throw new Error("Internal server error");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
