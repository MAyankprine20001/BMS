import { axiosInstance } from "./axiosInstance";

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/users/register", userData);
    return response.data;
  } catch (error) {
    // Optionally return a clearer error
    throw error.response?.data || error.message;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post("/users/login", credentials);
    return response.data;
  } catch (error) {
    // Optionally return a clearer error
    throw error.response?.data || error.message;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/users/current-user");
    return response.data;
  } catch (error) {
    // Optionally return a clearer error
    return error.response?.data || error.message;
  }
};
