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
  const handleToggleFavorite = (movie) => {
    const id = movie.id;
    console.log(movie);
    let favorite_id = movie.favorite_id;
    if (movie.favorite_id) {
      axios.delete(`http://localhost:3000/favorites/${movie.favorite_id}.json`).then((response) => {
        console.log(response);
        favorite_id = null;
        setMovies(
          movies.map((movie) => {
            if (movie.id === id) {
              movie.favorite_id = favorite_id;
              return movie;
            } else {
              return movie;
            }
          })
        );
      });
    } else {
      axios
        .post("http://localhost:3000/favorites.json", {
          name: movie.name,
          image_url: movie.image_url,
          category_id: movie.category.id,
          year: movie.year,
        })
        .then((response) => {
          console.log(response);
          favorite_id = response.data.id;
          setMovies(
            movies.map((movie) => {
              if (movie.id === id) {
                movie.favorite_id = favorite_id;
                return movie;
              } else {
                return movie;
              }
            })
          );
        });
    }
  };

  useEffect(handleIndex, []);
  return (
    <main>
      <MoviesNew onCreate={handleCreate} />
      <MoviesIndex movies={movies} onlyFavorites={true} onShow={handleShow} onToggleFavorite={handleToggleFavorite} />
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
        <MoviesShow movie={currentMovie} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  );
}
