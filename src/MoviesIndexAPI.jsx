export function MoviesIndex({ movies }) {
  return (
    <div>
      <h1>All movies ({movies.length} total)</h1>
      {movies.map((movie) => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          <img src={movie.image_urlToImage} alt="" />
          <p>{movie.content}</p>
        </div>
      ))}
    </div>
  );
}
