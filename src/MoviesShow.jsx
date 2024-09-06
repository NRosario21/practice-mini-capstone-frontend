export function MoviesShow({ movie }) {
  return (
    <div>
      <h1>Movie information</h1>
      <p>Name: {movie.name}</p>
      <p>Image_url: {movie.iamge_url}</p>
      <p>Category_id: {movie.category_id}</p>
      <p>Year: {movie.year}</p>
    </div>
  );
}
