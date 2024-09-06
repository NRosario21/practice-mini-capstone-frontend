import axios from "axios";
import { useState, useEffect } from "react";
import { MoviesIndex } from "./MoviesIndex";
import { MoviesNew } from "./MoviesNew";

export function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/movies.json", params).then((response) => {
      setMovies([...movies, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);
  return (
    <main>
      <MoviesNew onCreate={handleCreate} />
      <MoviesIndex movies={movies} />
    </main>
  );
}
