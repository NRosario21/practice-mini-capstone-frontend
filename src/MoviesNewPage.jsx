import axios from "axios";
import { useNavigate } from "react-router-dom";

import { MoviesNew } from "./MoviesNew";

export function MoviesNewPage() {
  const navigate = useNavigate();

  const handleCreate = (params) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/movies.json", params).then((response) => {
      console.log(response);
      navigate("/movies");
    });
  };

  return (
    <div>
      <MoviesNew onCreate={handleCreate} />
    </div>
  );
}
