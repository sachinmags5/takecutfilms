import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../features/movies/movieSlice";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";

const StatCard = ({ title, value }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-lg text-white"
    >
      <h3 className="text-sm text-gray-300">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </motion.div>
  );
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="flex bg-black min-h-screen text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="ml-[80px] md:ml-[260px] p-8 w-full transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Dashboard
          </h1>

          <div className="text-sm text-gray-400">
            {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard title="Total Movies" value={movies.length} />
          <StatCard title="Published" value={movies.length} />
          <StatCard title="Drafts" value="0" />
        </div>

        {/* Recent Movies */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-5">
            Recent Movies 🎬
          </h2>

          <div className="space-y-3">
            {movies.slice(0, 5).map((movie) => (
              <motion.div
                key={movie._id}
                whileHover={{ scale: 1.01 }}
                className="flex justify-between items-center border-b border-white/10 pb-3"
              >
                <p className="font-medium">{movie.title}</p>
                <span className="text-sm text-gray-400">
                  {new Date(movie.createdAt).toLocaleDateString()}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;