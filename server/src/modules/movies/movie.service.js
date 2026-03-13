import Movie from "./movie.model.js";

export const getAllMovies = async (query) => {
  const { year, search } = query;

  let filter = {};

  if (year) {
    filter.releaseYear = year;
  }

  if (search) {
    filter.title = { $regex: search, $options: "i" };
  }

  return await Movie.find(filter).sort({ createdAt: -1 });
};

export const getMovieBySlug = async (slug) => {
  return await Movie.findOne({ slug });
};

export const createMovie = async (data) => {
  return await Movie.create(data);
};

export const updateMovie = async (id, data) => {
  return await Movie.findByIdAndUpdate(id, data, { new: true });
};

export const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id);
};
