import axios from "axios";
import { useState, useEffect } from "react";
import { MoviesIndex } from "./MoviesIndex";
import { MoviesIndexAPI } from "./MoviesIndexAPI";

import { MoviesNew } from "./MoviesNew";
import { MoviesShow } from "./MoviesShow";
import { Modal } from "./Modal";

export function MoviesPage() {
  const [searchTerms, setSearchTerms] = useState("");
  const [movies, setMovies] = useState([]);
  const [apimovies, setApiMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

  const handleIndex = () => {
    console.log(searchTerms);
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };

  const handleIndexAPI = () => {
    console.log(searchTerms);
    axios.get(`http://localhost:3000/api_movies.json?search_terms=${searchTerms}`).then((response) => {
      console.log(response.data);
      setApiMovies(response.data);
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

  const handleUpdate = (id, params, successCallback) => {
    console.log("handleUpdate", params);
    axios.patch(`http://localhost:3000/movies/${id}.json`, params).then((response) => {
      setMovies(
        movies.map((movie) => {
          if (movie.id === response.data.id) {
            return response.data;
          } else {
            return movie;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroy = (id) => {
    console.log("handleDestroy", id);
    axios.delete(`http://localhost:3000/movies/${id}.json`).then(() => {
      setMovies(movies.filter((movie) => movie.id !== id));
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsMoviesShowVisible(false);
  };

  useEffect(handleIndex, [searchTerms]);
  return (
    <main>
      <div>
        Search:
        <input value={searchTerms} onChange={(event) => setSearchTerms(event.target.value)} type="text" />
        <button onClick={handleIndexAPI}>Submit</button>
      </div>
      <MoviesIndexAPI movies={apimovies} />
      <MoviesNew onCreate={handleCreate} />
      <MoviesIndex movies={movies} onShow={handleShow} />
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
        <MoviesShow movie={currentMovie} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  );
}
