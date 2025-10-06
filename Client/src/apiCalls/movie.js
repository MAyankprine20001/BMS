import { axiosInstance } from "./axiosInstance";

export const getAllMovies = async () => {
  try {
    const response = await axiosInstance.get("/movies/get-all-movies");
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return error;
  }
};
export const addMovie = async (movieData) => {
  try {
    const response = await axiosInstance.post("/movies/add-movie", movieData);
    return response.data;
  } catch (error) {
    console.error("Error adding movie:", error);
    return error;
  }
};

export const updateMovie = async (movieId, movieData) => {
  try {
    const response = await axiosInstance.put(
      `/movies/update-movie/${movieId}`,
      movieData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating movie:", error);
    return error;
  }
};

export const deleteMovie = async (movieId) => {
  try {
    const response = await axiosInstance.delete(
      `/movies/delete-movie/${movieId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting movie:", error);
    return error;
  }
};
