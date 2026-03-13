import * as movieService from "./movie.service.js";

export const getMovies = async (req, res, next) => {
  try {
    const movies = await movieService.getAllMovies(req.query);
    res.json(movies);
  } catch (error) {
    next(error);
  }
};

export const getMovie = async (req, res, next) => {
  try {
    const movie = await movieService.getMovieBySlug(req.params.slug);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(movie);
  } catch (error) {
    next(error);
  }
};

export const createMovie = async (req, res, next) => {
  try {
    const movie = await movieService.createMovie(req.body);
    res.status(201).json(movie);
  } catch (error) {
    next(error);
  }
};

export const updateMovie = async (req, res, next) => {
  try {
    const movie = await movieService.updateMovie(req.params.id, req.body);
    res.json(movie);
  } catch (error) {
    next(error);
  }
};

export const deleteMovie = async (req, res, next) => {
  try {
    await movieService.deleteMovie(req.params.id);
    res.json({ message: "Movie deleted" });
  } catch (error) {
    next(error);
  }
};
