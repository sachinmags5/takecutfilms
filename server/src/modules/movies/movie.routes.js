import express from "express";
import {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from "./movie.controller.js";

const router = express.Router();

router.get("/", getMovies);

router.get("/:slug", getMovie);

router.post("/", createMovie);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

export default router;
