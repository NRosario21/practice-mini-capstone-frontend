export function MoviesNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image_url: <input name="image_url" type="text" />
        </div>
        <div>
          Category_id: <input name="category_id" type="text" />
        </div>
        <div>
          Year: <input name="year" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
