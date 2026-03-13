import FilmGrid from "../films/FilmGrid";

function FeaturedFilms({ movies }) {
  return (
    <div className="p-10">
      <h2 className="text-3xl mb-6">Featured Films</h2>

      <FilmGrid movies={movies.slice(0, 6)} />
    </div>
  );
}

export default FeaturedFilms;