export const LoginAction = (userdetails) => (dispatch, getState) => {
  dispatch({
    type: "adduserdetails",
    payload: { ...userdetails },
  });
};

export const GetMovies = (moviedetails) => (dispatch, getState) => {
  dispatch({
    type: "addmovies",
    payload: [...moviedetails],
  });
};
export const GetCinemaHall = (sreendetails) => (dispatch, getState) => {
  dispatch({
    type: "addcinemahall",
    payload: [...sreendetails],
  });
};

export const SelectedShow = (selectedshow) => (dispatch, getState) => {
  dispatch({
    type: "selectedshow",
    payload: selectedshow,
  });
};

export const SelectedScreen = (selectedscreen) => (dispatch, getState) => {
  dispatch({
    type: "selectedscreen",
    payload: selectedscreen,
  });
};

export const SeatSelected = (userselected) => (dispatch, getState) => {
  const {
    bookmyshow: { userSelected },
  } = getState();

  const seat = userSelected.find(
    (checkedSeats) => checkedSeats === userselected
  );

  if (!userselected) {
    dispatch({
      type: "userselected",
      payload: [],
    });
  } else if (seat) {
    const seats = userSelected.filter(
      (checkedSeats) => checkedSeats !== userselected
    );

    dispatch({
      type: "userselected",
      payload: [...seats],
    });
  } else {
    dispatch({
      type: "userselected",
      payload: [...userSelected, userselected],
    });
  }
};

export const IsSeatHolded = (seatholded) => (dispatch, getState) => {
  dispatch({
    type: "seatholded",
    payload: seatholded,
  });
};

export const IsSeatBooked = (seatbooked) => (dispatch, getState) => {
  dispatch({
    type: "seatbooked",
    payload: [...seatbooked],
  });
};

export const GetUsers = (userlist) => (dispatch, getstate) => {
  dispatch({
    type: "getuserlist",
    payload: [...userlist],
  });
};
