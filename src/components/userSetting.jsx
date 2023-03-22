import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUsers } from "../action/showAction";
import axios from "axios";

function UserSetting() {
  const jwtToken = localStorage.getItem("token");

  const dispatch = useDispatch();
  const bookmyshow = useSelector((state) => state.bookmyshow);
  const { userList } = bookmyshow;

  const initialstate = {
    email: "",
    username: "",
    age: "",
  };

  const [users, setUsers] = useState(initialstate);
  const [userUpdate, setUserUpdate] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://guvi-hackathon2-backend-vva7.onrender.com/showalluser/admin",
        {
          headers: {
            token: jwtToken,
          },
        }
      )
      .then((response) => {
        dispatch(GetUsers(response.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch, jwtToken]);

  const inputChangeHandler = (e) => {
    const newUser = { ...users };
    newUser[e.target.name] = e.target.value;
    setUsers(newUser);
  };

  const editUser = (user) => {
    setUsers(user);
    setUserUpdate(true);
  };

  const removeUser = (user) => {
    axios
      .delete(
        `https://guvi-hackathon2-backend-vva7.onrender.com/deleteuser/admin/${user._id}`,
        {
          headers: {
            token: jwtToken,
          },
        }
      )
      .then((response) => {
        dispatch(GetUsers(response.data));
      })
      .catch((err) => console.log(err));
  };

  const onFormSubmitted = (e) => {
    e.preventDefault();

    axios
      .put(
        "https://guvi-hackathon2-backend-vva7.onrender.com/updateuser/admin",
        users,
        {
          headers: {
            token: jwtToken,
          },
        }
      )
      .then((response) => {
        dispatch(GetUsers(response.data));
      })
      .catch((err) => console.log(err));

    setUserUpdate(false);
    setUsers(initialstate);
  };

  return (<>
      <div className="container-fluid">
        <div className="row ">
          <div className="col container-fluid">
            {userList.map((user) => (
              <div className="row mt-4" key={user._id}>
                <div className="col text-start">
                  <div className="d-flex gap-1">
                    <h5> {user.username} </h5> | {user.age}
                  </div>

                  <span>{user.email}</span>
                </div>

                <div className="col align-self-center d-flex gap-1">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      editUser(user);
                    }}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      removeUser(user);
                    }}
                  >
                    remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col col-md-4 mt-5">
            <form className="user-form " onSubmit={onFormSubmitted}>
              <div className="container ">
                <div className="row-sm text-start">
                  <div className="col">
                    <label htmlFor="username" className="label-control">
                      Name:{" "}
                    </label>
                    <br />
                    <input
                      id="username"
                      type="text"
                      className="input-control"
                      name="username"
                      onChange={inputChangeHandler}
                      value={users.username}
                    ></input>
                  </div>

                  <div className="col">
                    {" "}
                    <label htmlFor="email" className="label-control">
                      Email:{" "}
                    </label>
                    <br />
                    <input
                      id="email"
                      type="text"
                      className="input-control"
                      name="email"
                      onChange={inputChangeHandler}
                      value={users.email}
                    ></input>
                  </div>

                  <div className="col">
                    <label htmlFor="age" className="label-control">
                      Launguage{" "}
                    </label>
                    <br />
                    <input
                      id="age"
                      type="text"
                      className="input-control"
                      name="age"
                      onChange={inputChangeHandler}
                      value={users.age}
                    ></input>
                  </div>
                  <div className="col">
                    <div className="row  mt-3 ms-auto ">
                      <div className="col text-start">
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            className=" btn btn-secondary btn-sm"
                            onClick={(e) => {
                              e.preventDefault();
                              setUsers(initialstate);
                              setUserUpdate(false);
                            }}
                          >
                            cancel
                          </button>
                          {userUpdate ? (
                            <button
                              type="submit"
                              className=" btn btn-warning  btn-sm"
                            >
                              update
                            </button>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSetting;
