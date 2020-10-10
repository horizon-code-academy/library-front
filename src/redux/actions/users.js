import axios from "axios";

export function login(user, successCb, failCb) {
  const success = (data) => ({
    type: "LOGIN_SUCCESS",
    payload: data,
  });
  const error = (data) => ({
    type: "LOGIN_ERROR",
  });
  return (dispatch) =>
    axios
      .post("http://localhost:8081/login", user)
      .then((res) => {
        dispatch(success(res.data));
        successCb();
      })
      .catch((e) => {
        dispatch(error(e.message));
        failCb(e.message);
      });
}

export function getAllUsers() {
  const success = (data) => ({
    type: "GET_ALL_USERS_SUCCESS",
    payload: data,
  });
  const error = (data) => ({
    type: "GET_ALL_USERS_ERROR",
  });
  return (dispatch) =>
    axios
      .get("http://localhost:8081/users")
      .then((res) => {
        dispatch(success(res.data));
      })
      .catch((e) => {
        dispatch(error(e.message));
      });
}

export function addUser(user, successCb, failCb) {
  const success = () => ({
    type: "ADD_USER_SUCCESS",
  });
  const error = () => ({
    type: "ADD_USER_ERROR",
  });
  return (dispatch) =>
    axios
      .post("http://localhost:8081/users", user)
      .then(() => {
        dispatch(success());
        successCb();
      })
      .catch((e) => {
        dispatch(error(e.message));
        failCb(e.message);
      });
}

export function updateUser(user, successCb, failCb) {
  const success = () => ({
    type: "UPDATE_USER_SUCCESS",
  });
  const error = () => ({
    type: "UPDATE_USER_ERROR",
  });
  return (dispatch) =>
    axios
      .put("http://localhost:8081/users/" + user._id, user)
      .then(() => {
        dispatch(success());
        successCb();
      })
      .catch((e) => {
        dispatch(error());
        failCb();
      });
}

export function deleteUser(id, successCb, failCb) {
  const success = () => ({
    type: "DELETE_USER_SUCCESS",
  });
  const error = () => ({
    type: "DELETE_USER_ERROR",
  });
  return (dispatch) =>
    axios
      .delete("http://localhost:8081/users/" + id)
      .then(() => {
        dispatch(success());
        successCb();
      })
      .catch((e) => {
        dispatch(error());
        failCb();
      });
}
