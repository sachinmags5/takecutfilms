import axiosInstance from "../../api/axios";

export const createMovieApi = (data) => {
  return axiosInstance.post("/movies", data);
};

export const getMoviesApi = () => {
  return axiosInstance.get("/movies");
};

export const deleteMovieApi = (id) => {
  return axiosInstance.delete(`/movies/${id}`);
};
