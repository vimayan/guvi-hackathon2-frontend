import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SeatSelected, IsSeatBooked, IsSeatHolded } from "../action/showAction";
import { useNavigate } from "react-router-dom";
import Io from "socket.io-client";

const seatsRight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const seatsLeft = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const rows3 = ["A", "B", "C", "D"];
const rows2 = ["E", "F", "G", "H"];
const rows1 = ["I", "J", "k", "L"];

let socket;
function Seats() {
  const bookmyshow = useSelector((state) => state.bookmyshow);
  const { seatHolded, seatBooked, userSelected, selectedScreen } = bookmyshow;
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("token");
    if (!data) {
      navigate("/");
    }
  }, [navigate]);

  const dispatch = useDispatch();

  const [isholded, setIsHolded] = useState([]);
  const [isbooked, setIsbooked] = useState([]);
  const [isselectedSeat, setIselectedSeat] = useState([]);

  useEffect(() => {
    dispatch(IsSeatBooked(selectedScreen.screen.seatBooked));
    dispatch(IsSeatHolded(selectedScreen.screen.seatHolded));
  }, [
    dispatch,
    selectedScreen.screen.seatBooked,
    selectedScreen.screen.seatHolded,
  ]);
  useEffect(() => {
    socket = Io("https://guvi-hackathon2-backend-vva7.onrender.com");
    socket.emit("join", { cinemaHall: selectedScreen.name }, (reply) => {
      console.log(reply);
    });
  }, [selectedScreen]);

  useEffect(() => {
    socket.on("seatholded", (seats) => {
      dispatch(IsSeatHolded(seats));
    });
  }, [dispatch]);

  useEffect(() => {
    setIsbooked(seatBooked);
    setIsHolded(seatHolded);
  }, [seatBooked, seatHolded]);

  const handlechange = (e) => {
    const { value, checked } = e.target;
    // console.log(checked);
    setIselectedSeat([...isselectedSeat, value]);
    dispatch(SeatSelected(value));

    if (checked) {
      socket.emit("seatselecting", value, selectedScreen, [
        ...isselectedSeat,
        value,
      ]);
    } else {
      socket.emit("seatremoving", value, selectedScreen);
    }
  };

  const iSDisabled = useCallback(
    (row_name, seat_no) => {
      const seatnumber = `${row_name + seat_no}`;
      if (
        !userSelected.find((seats) => seats === seatnumber) &&
        (isholded.find((seats) => seats === seatnumber) ||
          isbooked.find((seats) => seats === seatnumber))
      ) {
        return true;
      }
    },
    [isholded, isbooked, userSelected]
  );

  const seatView = useCallback(
    (row_name, seat_no) => {
      const seatnumber = `${row_name + seat_no}`;

      if (isbooked.find((seats) => seats === seatnumber)) {
        return "text-danger";
      } else if (userSelected.find((seats) => seats === seatnumber)) {
        return "text-info";
      }

      if (isholded.find((seats) => seats === seatnumber)) {
        return "text-warning";
      } else return "text-success";
    },
    [userSelected, isholded, isbooked]
  );

  return (<>
      <div className="mx-4 fw-bold mt-4">
        <div className="d-flex flex-row gap-3 gap-sm-5 flex-nowrap  mb-2">
          <div>
            {rows3.map((row_name, index) => (
              <div key={index} className=" d-flex flex-row flex-nowrap ">
                <span className="badge rounded-pill"></span>
                {seatsLeft.map((seat_no, index) => (
                  <div
                    key={seat_no}
                    className="btn-group"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <input
                      type="checkbox"
                      className="btn-check  col-1"
                      id={`${row_name + seat_no}`}
                      value={`${row_name + seat_no}`}
                      onChange={handlechange}
                      autoComplete="off"
                      disabled={iSDisabled(row_name, seat_no)}
                    />

                    <label htmlFor={`${row_name + seat_no}`}>
                      <i
                        className={
                          "fa-solid fa-couch m-1 " + seatView(row_name, seat_no)
                        }
                      />
                    </label>
                  </div>
                ))}
                <span className="ms-3"></span>
              </div>
            ))}
          </div>
          <div>
            {rows3.map((row_name, index) => (
              <div key={index} className=" d-flex flex-row flex-nowrap ">
                <span className="badge rounded-pill"></span>
                {seatsRight.map((seat_no, index) => (
                  <div
                    key={seat_no}
                    className="btn-group"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <input
                      type="checkbox"
                      className="btn-check  col-1"
                      id={`${row_name + seat_no}`}
                      value={`${row_name + seat_no}`}
                      onChange={handlechange}
                      autoComplete="off"
                      disabled={iSDisabled(row_name, seat_no)}
                    />

                    <label htmlFor={`${row_name + seat_no}`}>
                      <i
                        className={
                          "fa-solid fa-couch m-1 " + seatView(row_name, seat_no)
                        }
                      />
                    </label>
                  </div>
                ))}
                <span className="ms-3">{row_name}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="badge rounded-pill bg-warning">prcie:150</span>
          </div>
        </div>

        <div className="d-flex flex-row gap-3 gap-sm-5 flex-nowrap  mb-5">
          <div>
            {rows2.map((row_name, index) => (
              <div key={index} className=" d-flex flex-row flex-nowrap">
                <span className="badge rounded-pill"></span>
                {seatsLeft.map((seat_no, index) => (
                  <div
                    key={seat_no}
                    className="btn-group"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <input
                      type="checkbox"
                      className="btn-check  col-1"
                      id={`${row_name + seat_no}`}
                      value={`${row_name + seat_no}`}
                      onChange={handlechange}
                      autoComplete="off"
                      disabled={iSDisabled(row_name, seat_no)}
                    />
                    <label htmlFor={`${row_name + seat_no}`}>
                      <i
                        className={
                          "fa-solid fa-couch m-1 " + seatView(row_name, seat_no)
                        }
                      />
                    </label>
                  </div>
                ))}
                <span className="ms-3"></span>
              </div>
            ))}
          </div>
          <div>
            {rows2.map((row_name, index) => (
              <div key={index} className=" d-flex flex-row flex-nowrap">
                {seatsRight.map((seat_no, index) => (
                  <div
                    key={seat_no}
                    className="btn-group"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <input
                      type="checkbox"
                      className="btn-check  col-1"
                      id={`${row_name + seat_no}`}
                      value={`${row_name + seat_no}`}
                      onChange={handlechange}
                      autoComplete="off"
                      disabled={iSDisabled(row_name, seat_no)}
                    />
                    <label htmlFor={`${row_name + seat_no}`}>
                      <i
                        className={
                          "fa-solid fa-couch m-1 " + seatView(row_name, seat_no)
                        }
                      />
                    </label>
                  </div>
                ))}
                <span className="ms-3">{row_name}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="badge rounded-pill bg-warning">prcie:150</span>
          </div>
        </div>

        <div className="d-flex flex-row gap-3 gap-sm-5 flex-nowrap  mb-5">
          <div>
            {rows1.map((row_name, index) => (
              <div key={index} className=" d-flex flex-row flex-nowrap">
                <span className="badge rounded-pill"></span>
                {seatsLeft.map((seat_no, index) => (
                  <div
                    key={seat_no}
                    className="btn-group"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <input
                      type="checkbox"
                      className="btn-check  col-1"
                      id={`${row_name + seat_no}`}
                      value={`${row_name + seat_no}`}
                      onChange={handlechange}
                      autoComplete="off"
                      disabled={iSDisabled(row_name, seat_no)}
                    />
                    <label htmlFor={`${row_name + seat_no}`}>
                      <i
                        className={
                          "fa-solid fa-couch m-1 " + seatView(row_name, seat_no)
                        }
                      />
                    </label>
                  </div>
                ))}
                <span className="ms-3"></span>
              </div>
            ))}
          </div>
          <div>
            {rows1.map((row_name, index) => (
              <div key={index} className=" d-flex flex-row flex-nowrap">
                {seatsRight.map((seat_no, index) => (
                  <div
                    key={seat_no}
                    className="btn-group"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <input
                      type="checkbox"
                      className="btn-check  col-1"
                      id={`${row_name + seat_no}`}
                      value={`${row_name + seat_no}`}
                      onChange={handlechange}
                      autoComplete="off"
                      disabled={iSDisabled(row_name, seat_no)}
                    />
                    <label htmlFor={`${row_name + seat_no}`}>
                      <i
                        className={
                          "fa-solid fa-couch m-1 " + seatView(row_name, seat_no)
                        }
                      />
                    </label>
                  </div>
                ))}
                <span className="ms-3 ">{row_name}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="badge rounded-pill bg-warning">prcie:50</span>
          </div>
        </div>

        <div style={{ width: "750px" }}>
          <hr />
          screen here
          <hr />
          <div>
            <span>
              AVAILABLE:
              <i className="fa-solid fa-couch text-success ms-2 me-4" />
              WAITNG:
              <i className="fa-solid fa-couch text-warning ms-2 me-4" />
              BOOKED:
              <i className="fa-solid fa-couch text-danger ms-2 me-4" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seats;
