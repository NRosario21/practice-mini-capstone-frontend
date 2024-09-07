import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

import { MoviesShow } from "./MoviesShow";

export function MoviesShowPage() {
  const movie = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (id, params) => {
    console.log("handleUpdate", params);
    axios.patch(`http://localhost:3000/movies/${id}.json`, params).then(() => {
      navigate("/movies");
    });
  };

  const handleDestroy = (id) => {
    console.log("handleDestroy", id);
    axios.delete(`http://localhost:3000/movies/${id}.json`).then(() => {
      navigate("/movies");
    });
  };

  return (
    <div>
      <MoviesShow photo={movie} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  );
}
