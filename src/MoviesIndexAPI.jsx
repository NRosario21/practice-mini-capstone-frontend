export function MoviesIndexAPI({ movies }) {
  return (
    <div>
      <h1>All movies ({movies.length} total)</h1>
      {movies.map((movie) => (
        <div key={movie.Title}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt="" />
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}
