import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

import { MoviesIndex } from "./MoviesIndex";

export function MoviesIndexPage() {
  const movies = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (movie) => {
    console.log("handleShow", movie);
    navigate(`/movies/${movie.id}`);
  };
  const handleToggleFavorite = (movie) => {
    console.log(movie);

    if (movie.favorite_id) {
      axios.delete(`http://localhost:3000/favorites/${movie.favorite_id}.json`).then((response) => {
        console.log(response);

        navigate("/movies");
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

          navigate("/movies");
        });
    }
  };

  return (
    <div className="container">
      <MoviesIndex movies={movies} onShow={handleShow} onToggleFavorite={handleToggleFavorite} />
    </div>
  );
}
