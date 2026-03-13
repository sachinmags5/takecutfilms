import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { fetchMovie } from "../../features/movies/movieSlice";

function MovieDetailPage() {

  const { slug } = useParams();
  const dispatch = useDispatch();

  const { movie, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovie(slug));
  }, [slug, dispatch]);

  if (loading || !movie) {
    return (
      <div className="p-10 text-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-10 max-w-8xl mx-auto">

      <h1 className="text-5xl font-bold mb-6">
        {movie.title}
      </h1>

      {movie.banner && (
        <img
          src={movie.banner}
          width="100%"
          height="100%"
          className="rounded-lg mb-8"
        />
      )}

      <p className="text-gray-300 mb-10">
        {movie.description}
      </p>

      <h2 className="text-2xl mb-4">
        Trailer
      </h2>

      {movie.trailerUrl ? (

        <div className="aspect-video">

          <ReactPlayer
            url={movie.trailerUrl}
            width="100%"
            height="100%"
            controls
          />

        </div>

      ) : (

        <p>No trailer available</p>

      )}

    </div>
  );
}

export default MovieDetailPage;