import { useState } from "react";

export function MoviesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  console.log(props);
  const filteredMovies = props.onlyFavorites ? props.movies.filter((movie) => movie.favorite_id) : props.movies;
  return (
    <div id="movies-index">
      <h1>All Movies</h1>
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
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="col">
            <div className="card h-100">
              <img src={movie.image_url} className="card-img-top object-fit-cover h-100" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <button className="btn btn-primary" onClick={() => props.onShow(movie)}>
                  More info
                </button>
                {movie.favorite_id ? (
                  <button className="btn btn-primary" onClick={() => props.onToggleFavorite(movie)}>
                    ♥
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={() => props.onToggleFavorite(movie)}>
                    ♡
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
