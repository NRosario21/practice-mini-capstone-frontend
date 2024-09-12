import axios from "axios";
import { useState } from "react";
import { MoviesIndexAPI } from "./MoviesIndexAPI";

export function MoviesNew({ onCreate }) {
  const [apimovies, setApiMovies] = useState([]);
  // const [currentApiMovie, setCurrentApiMovie] = useState({});
  const [searchTerms, setSearchTerms] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };
  const handleIndexAPI = () => {
    console.log(searchTerms);
    axios.get(`http://localhost:3000/api_movies.json?search_terms=${searchTerms}`).then((response) => {
      console.log(response.data);
      setApiMovies(response.data);
    });
  };
  const handleSelect = (movie) => {
    console.log(movie);
    setName(movie.Title);
    setApiMovies([]);
    setSearchTerms("");
  };
  return (
    <div className="container">
      <div>
        Search:
        <input value={searchTerms} onChange={(event) => setSearchTerms(event.target.value)} type="text" />
        <button onClick={handleIndexAPI}>Submit</button>
      </div>
      <MoviesIndexAPI movies={apimovies} onSelect={handleSelect} />
      <h1>New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={name} onChange={(event) => setName(event.target.value)} name="name" type="text" />
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
