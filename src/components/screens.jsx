import React, { useEffect } from "react";
import CinemaHall from "./cinemaHall";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Screens() {
  const navigate = useNavigate();

  const bookmyshow = useSelector((state) => state.bookmyshow);
  const { selectedShow } = bookmyshow;

  useEffect(() => {
    const data = localStorage.getItem("token");

    if (!data) {
      navigate("/");
    }
  }, [navigate]);

  return (<>
      <Navbar />

      <div className="m-3">
        <div className="card mb-3" style={{ maxWwidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://images.pexels.com/photos/3945316/pexels-photo-3945316.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 text-start">
              <div className="card-body">
                <div className="mb-3">
                  <h5 className="card-title">{selectedShow.name}</h5>
                  <p>
                    {selectedShow.launguage}{" "}
                    <span>{selectedShow.certified}</span>{" "}
                    <strong>{selectedShow.length}</strong>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Actors:
                      {selectedShow.cast.map((actor) => (
                        <span className="mx-1" key={actor._id}>
                          {actor.name}
                        </span>
                      ))}
                    </small>
                  </p>
                </div>

                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col me-auto">
        <CinemaHall></CinemaHall>
      </div>
    </>
  );
}

export default Screens;
