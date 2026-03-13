import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import movieRoutes from "./modules/movies/movie.routes.js";
import newsRoutes from "./modules/news/news.routes.js";
import contactRoutes from "./modules/contact/contact.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";

import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

app.use(
  cors({
    // origin: "http://localhost:5173", // frontend URL
    origin: ["http://localhost:5173", "https://takecutfilms.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/movies", movieRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

app.use(errorHandler);

export default app;
