import { useLoaderData, useNavigate } from "react-router-dom";

import { MoviesIndex } from "./MoviesIndex";

export function MoviesIndexPage() {
  const movies = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (movie) => {
    console.log("handleShow", movie);
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div className="container">
      <MoviesIndex movies={movies} onShow={handleShow} />
    </div>
  );
}
