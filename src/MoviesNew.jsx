export function MoviesNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };
  return (
    <div className="container">
      <h1>New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image_url: <input name="image_url" type="text" />
        </div>
        <div>
          Category_id:{" "}
          <select name="category_id">
            <option value="">--Please choose an option--</option>
            <option value="1">Horror</option>
            <option value="2">Comedy</option>
            <option value="3">Action</option>
            <option value="3">Fantasy</option>
            <option value="3">Cyberpunk</option>
          </select>
        </div>
        <div>
          Year: <input name="year" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
