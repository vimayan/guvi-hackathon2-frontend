import React, { useState } from "react";
import { MovieCarousel } from "./movieCarousel";

function MovieList() {
  const [showMovies, setShowMovies] = useState(false);

  setTimeout(() => {
    setShowMovies(true);
  }, 1000);

  return (<div className="container-fluid mt-5" id="Movies">
      <div className="row">
        <h5 className="text-decoration-underline"> MOVIES </h5>
      </div>
      <div className="row my-3">
        <div className="col">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check "
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
            />
            <label className="btn btn-outline-success" htmlFor="btnradio1">
              NOW SHOWING
            </label>

            <input
              type="radio"
              className="btn-check bg-"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label className="btn btn-outline-warning" htmlFor="btnradio2">
              UPCOMMING
            </label>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-10 mx-auto">
          {showMovies ? <MovieCarousel /> : <></>}
        </div>
      </div>
      <div className="row mt-3">
        <p className="col"> view more</p>
      </div>
    </div>
  );
}

export default MovieList;
