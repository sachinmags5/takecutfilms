import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovies } from "../../features/movies/movieSlice";

import HeroBanner from "../../components/home/HeroBanner";
import FeaturedFilms from "../../components/home/FeaturedFilms";

function HomePage() {
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div>
      <HeroBanner movies={movies} />

      <FeaturedFilms movies={movies} />
    </div>
  );
}

export default HomePage;