import { useState } from "react";

export function MoviesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  console.log(props);
  return (
    <div id="movies-index">
      <h1>All movies</h1>
      <div>
        Search:{" "}
        <input
          list="titles"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          type="text"
        />
        <datalist id="titles">
          {props.movies.map((movie) => (
            <option key={movie.id}>{movie.title}</option>
          ))}
        </datalist>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {props.movies.map((movie) => (
          <div key={movie.id} className="col">
            <div className="card h-100">
              <img src={movie.image_url} className="card-img-top object-fit-cover h-100" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>

                <button className="btn btn-primary" onClick={() => props.onShowMovie(movie)}>
                  More info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
