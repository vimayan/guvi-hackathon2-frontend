import React, { useState } from "react";
import CinemaHallSetting from "./cinemaHallSetting";
import MovieSetting from "./movieSetting";
import { useNavigate } from "react-router-dom";
import UserSetting from "./userSetting";

function Setting() {
  const [showCinemaHall, setShowCinemaHall] = useState(false);
  const [showUser, setShowUser] = useState(true);
  const [showMovies, setShowMovies] = useState(false);

  const navigate = useNavigate();

  const home = () => {
    navigate("/home");
  };

  return (<>
      <div className="container mt-4 mx-auto gap-4">
        <div className="row">
          <button className="col-1 btn btn-info btn-sm" onClick={home}>
            Home
          </button>
          <div
            className="btn-group col-4 mx-auto"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setShowCinemaHall(false);
                setShowUser(true);
                setShowMovies(false);
              }}
            >
              User
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setShowCinemaHall(true);
                setShowUser(false);
                setShowMovies(false);
              }}
            >
              CinemaHall
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setShowCinemaHall(false);
                setShowUser(false);
                setShowMovies(true);
              }}
            >
              Movies
            </button>
          </div>
        </div>
        <hr />

        {showCinemaHall ? <CinemaHallSetting></CinemaHallSetting> : <></>}
        {showMovies ? <MovieSetting></MovieSetting> : <></>}
        {showUser ? <UserSetting></UserSetting> : <></>}
      </div>
    </>
  );
}

export default Setting;
