import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../features/movies/movieSlice.js";
import FilmCard from "../../components/films/FilmCard.jsx";
import { motion } from "framer-motion";

function FilmsPage() {

  const dispatch = useDispatch();

  const { movies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>

      {/* Banner */}

      <div className="relative h-[50vh] flex items-center justify-center text-center">

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728')] bg-cover bg-center opacity-40"></div>

        <div className="relative z-10">

          <h1 className="text-6xl font-bold mb-4">
            Our Films
          </h1>

          <p className="text-gray-300 text-lg">
            Explore our cinematic productions and storytelling.
          </p>

        </div>

      </div>

      {/* Movies Grid */}

      <div className="max-w-7xl mx-auto px-8 py-16">

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

            {movies.map((movie) => (
              <motion.div
                key={movie._id}
                whileHover={{ scale: 1.05 }}
              >
                <FilmCard movie={movie} />
              </motion.div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default FilmsPage;