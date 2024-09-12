export function MoviesIndexAPI({ movies, onSelect }) {
  return (
    <div>
      <h1>All movies ({movies.length} total)</h1>
      {movies.map((movie) => (
        <div key={movie.Poster}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} onClick={() => onSelect(movie)} alt="" />
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}
