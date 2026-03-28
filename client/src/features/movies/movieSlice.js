import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";

// ===== EXISTING =====
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

// ===== NEW (ADMIN) =====

// CREATE MOVIE
export const createMovie = createAsyncThunk(
  "movies/createMovie",
  async (data, thunkAPI) => {
    try {
      const res = await API.post("/movies", data);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Create failed");
    }
  },
);

// UPDATE MOVIE
export const updateMovie = createAsyncThunk(
  "movies/updateMovie",
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await API.put(`/movies/${id}`, data);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Update failed");
    }
  },
);

// DELETE MOVIE
export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (id, thunkAPI) => {
    try {
      await API.delete(`/movies/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue("Delete failed");
    }
  },
);

const movieSlice = createSlice({
  name: "movies",

  initialState: {
    movies: [],
    movie: null,
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      // ===== EXISTING =====
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })

      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.movie = action.payload;
      })

      // ===== ADMIN =====

      .addCase(createMovie.fulfilled, (state, action) => {
        state.movies.unshift(action.payload);
      })

      .addCase(updateMovie.fulfilled, (state, action) => {
        const index = state.movies.findIndex(
          (m) => m._id === action.payload._id,
        );
        if (index !== -1) {
          state.movies[index] = action.payload;
        }
      })

      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter((m) => m._id !== action.payload);
      })

      .addMatcher(
        (action) =>
          action.type.startsWith("movies/") &&
          action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = action.payload;
        },
      );
  },
});

export default movieSlice.reducer;
