import axios from "axios";

const token = localStorage.getItem("token");

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8082/api",
  headers: {
    withCredentials: true,
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
  timeout: 100000000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
