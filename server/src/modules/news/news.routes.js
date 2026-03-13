import express from "express";
import { getNews, getSingleNews, createNews } from "./news.controller.js";

const router = express.Router();

router.get("/", getNews);

router.get("/:id", getSingleNews);

router.post("/", createNews);

export default router;
