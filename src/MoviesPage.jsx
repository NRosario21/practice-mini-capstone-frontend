import axios from "axios";
import { useState, useEffect } from "react";
import { MoviesIndex } from "./MoviesIndex";

export function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };

  useEffect(handleIndex, []);
  return (
    <main>
      <MoviesIndex movies={movies} />
    </main>
  );
}
