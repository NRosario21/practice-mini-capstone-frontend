import axios from "axios";
import { useState, useEffect } from "react";
import { MoviesIndex } from "./MoviesIndex";
import { MoviesNew } from "./MoviesNew";
import { MoviesShow } from "./MoviesShow";
import { Modal } from "./Modal";

export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

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

  const handleShow = (movie) => {
    console.log("handleShow", movie);
    setIsMoviesShowVisible(true);
    setCurrentMovie(movie);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsMoviesShowVisible(false);
  };

  useEffect(handleIndex, []);
  return (
    <main>
      <MoviesNew onCreate={handleCreate} />
      <MoviesIndex movies={movies} onShow={handleShow} />
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
        <MoviesShow movie={currentMovie} />
      </Modal>
    </main>
  );
}
