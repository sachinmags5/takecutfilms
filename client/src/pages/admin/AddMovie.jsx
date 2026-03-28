import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMovie } from "../../features/movies/movieSlice";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import axios from "axios";

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    releaseYear: "",
    description: "",
    director: "",
    cast: "",
    genre: "",
    trailerUrl: "",
    poster: "",
    banner: "",
  });

  const [loading, setLoading] = useState({
    poster: false,
    banner: false,
  });

  const [error, setError] = useState("");

  // ===== Upload Handler =====
  const uploadImage = async (file, field) => {
    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );

    setLoading((prev) => ({ ...prev, [field]: true }));

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        data
      );

      setForm((prev) => ({
        ...prev,
        [field]: res.data.secure_url,
      }));
    } catch (err) {
      setError(`Failed to upload ${field}`);
    }

    setLoading((prev) => ({ ...prev, [field]: false }));
  };

  // ===== Submit =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    const requiredFields = [
      "title",
      "slug",
      "releaseYear",
      "description",
      "director",
      "cast",
      "genre",
      "poster",
      "banner",
    ];

    for (let field of requiredFields) {
      if (!form[field]) {
        return setError(`${field} is required`);
      }
    }

    const res = await dispatch(createMovie(form));

    if (res.meta.requestStatus === "fulfilled") {
      navigate("/admin/movies");
    } else {
      setError("Failed to create movie");
    }
  };

  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />

      <div className="ml-[80px] md:ml-[260px] p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Add Movie</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white/10 p-6 rounded-2xl backdrop-blur-xl"
        >
          {/* TITLE */}
          <input
            type="text"
            placeholder="Title"
            className="input"
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          {/* SLUG */}
          <input
            type="text"
            placeholder="Slug (e.g. test-movie)"
            className="input"
            onChange={(e) =>
              setForm({ ...form, slug: e.target.value })
            }
          />

          {/* YEAR */}
          <input
            type="number"
            placeholder="Release Year"
            className="input"
            onChange={(e) =>
              setForm({ ...form, releaseYear: e.target.value })
            }
          />

          {/* DIRECTOR */}
          <input
            type="text"
            placeholder="Director"
            className="input"
            onChange={(e) =>
              setForm({ ...form, director: e.target.value })
            }
          />

          {/* CAST */}
          <input
            type="text"
            placeholder="Cast"
            className="input"
            onChange={(e) =>
              setForm({ ...form, cast: e.target.value })
            }
          />

          {/* GENRE */}
          <input
            type="text"
            placeholder="Genre"
            className="input"
            onChange={(e) =>
              setForm({ ...form, genre: e.target.value })
            }
          />

          {/* TRAILER */}
          <input
            type="text"
            placeholder="Trailer URL"
            className="input"
            onChange={(e) =>
              setForm({ ...form, trailerUrl: e.target.value })
            }
          />

          {/* DESCRIPTION */}
          <textarea
            placeholder="Description"
            rows={4}
            className="input"
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          {/* POSTER UPLOAD */}
          <div>
            <label className="text-sm text-gray-400">Poster</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                uploadImage(e.target.files[0], "poster")
              }
              className="mt-2"
            />

            {loading.poster && (
              <p className="text-yellow-400 text-sm">
                Uploading poster...
              </p>
            )}

            {form.poster && (
              <img
                src={form.poster}
                alt="poster"
                className="h-32 mt-2 rounded"
              />
            )}
          </div>

          {/* BANNER UPLOAD */}
          <div>
            <label className="text-sm text-gray-400">Banner</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                uploadImage(e.target.files[0], "banner")
              }
              className="mt-2"
            />

            {loading.banner && (
              <p className="text-yellow-400 text-sm">
                Uploading banner...
              </p>
            )}

            {form.banner && (
              <img
                src={form.banner}
                alt="banner"
                className="h-32 mt-2 rounded"
              />
            )}
          </div>

          {/* ERROR */}
          {error && <p className="text-red-400">{error}</p>}

          {/* SUBMIT */}
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-lg">
            Create Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;