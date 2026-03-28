import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  deleteMovie,
} from "../../features/movies/movieSlice";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const ManageMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (confirm("Delete this movie?")) {
      dispatch(deleteMovie(id));
    }
  };

  return (
    <div className="flex bg-black min-h-screen text-white">
      <Sidebar />

      <div className="ml-[80px] md:ml-[260px] p-8 w-full">
        {/* Header */}
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Manage Movies</h1>

          <button
            onClick={() => navigate("/admin/movies/add")}
            className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-lg"
          >
            + Add Movie
          </button>
        </div>

        {/* Table */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-white/10 text-gray-300 text-sm">
              <tr>
                <th className="p-4">Title</th>
                <th className="p-4">Created</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {movies.map((movie) => (
                <motion.tr
                  key={movie._id}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="border-b border-white/10"
                >
                  <td className="p-4">{movie.title}</td>

                  <td className="p-4 text-gray-400">
                    {new Date(movie.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4 flex gap-3">
                    <button
                      onClick={() =>
                        navigate(`/admin/movies/edit/${movie._id}`)
                      }
                      className="px-3 py-1 bg-blue-500 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(movie._id)}
                      className="px-3 py-1 bg-red-500 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {loading && (
            <div className="p-4 text-center text-gray-400">
              Loading...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageMovies;