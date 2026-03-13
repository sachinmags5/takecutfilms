import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    releaseYear: Number,

    description: String,

    director: String,

    cast: [String],

    poster: String,

    banner: String,

    trailerUrl: String,

    gallery: [String],

    genre: [String],
  },
  { timestamps: true },
);

export default mongoose.model("Movie", movieSchema);
