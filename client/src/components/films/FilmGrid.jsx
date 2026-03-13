import FilmCard from "./FilmCard";

function FilmGrid({ movies }) {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <FilmCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
}

export default FilmGrid;