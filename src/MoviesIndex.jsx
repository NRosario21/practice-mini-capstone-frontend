export function MoviesIndex({ movies }) {
  return (
    <div>
      <h1>All movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <img src={movie.image_url} />
          <p>Category: {movie.category.name}</p>
          <p>Year: {movie.year}</p>
        </div>
      ))}
    </div>
  );
}
