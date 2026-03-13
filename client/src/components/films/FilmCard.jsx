import { Link } from "react-router-dom";

function FilmCard({ movie }) {
  return (
    <Link
      to={`/films/${movie.slug}`}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
    >

      {/* Poster Container */}

      <div className="w-full h-[360px] bg-white flex items-center justify-center">

        <img
          src={movie.poster}
          alt={movie.title}
          className="max-h-full object-contain"
        />

      </div>

      {/* Content */}

      <div className="p-4">

        <h3 className="text-xl font-semibold mb-2">
          {movie.title}
        </h3>

        <p className="text-gray-400 text-sm line-clamp-2">
          {movie.description}
        </p>

      </div>

    </Link>
  );
}

export default FilmCard;