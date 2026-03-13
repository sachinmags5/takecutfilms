import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const res = await API.get("/movies");
  return res.data;
});

export const fetchMovie = createAsyncThunk(
  "movies/fetchMovie",
  async (slug) => {
    const res = await API.get(`/movies/${slug}`);
    return res.data;
  },
);

const movieSlice = createSlice({
  name: "movies",

  initialState: {
    movies: [],
    movie: null,
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })

      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.movie = action.payload;
      });
  },
});

export default movieSlice.reducer;
