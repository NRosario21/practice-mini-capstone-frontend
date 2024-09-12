export function MoviesShow(props) {
  const movie = props.movie;
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateMovie(props.movie.id, params);
  };

  const handleClick = () => {
    props.onDestroy(props.movie.id);
  };
  return (
    <div className="container">
      <h1>Movie information</h1>
      <p>Name: {movie.name}</p>
      <p>Image_url: {movie.image_url}</p>
      <p>Category_id: {movie.category_id}</p>
      <p>Year: {movie.year}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={movie.name} name="name" type="text" />
        </div>
        <div>
          Image_url: <input defaultValue={movie.image_url} name="image_url" type="text" />
        </div>
        <div>
          Category_id: <input defaultValue={movie.category_id} name="category_id" type="text" />
        </div>
        <div>
          Year: <input defaultValue={movie.year} name="year" type="text" />
        </div>
        <button className="btn btn-primary mb-5" type="submit">
          Update movie
        </button>
      </form>
      <button onClick={handleClick} className="btn btn-danger mb-5">
        Destroy movie
      </button>
    </div>
  );
}
