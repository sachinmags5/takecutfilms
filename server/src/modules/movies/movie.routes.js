import express from "express";
import {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from "./movie.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { isAdmin } from "../../middleware/role.middleware.js";

const router = express.Router();
// PUBLIC
router.get("/", getMovies);
router.get("/:slug", getMovie);

// ADMIN ONLY
router.post("/", authMiddleware, isAdmin, createMovie);
router.put("/:id", authMiddleware, isAdmin, updateMovie);
router.delete("/:id", authMiddleware, isAdmin, deleteMovie);

export default router;
