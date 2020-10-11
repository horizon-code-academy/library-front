import axios from "axios";

export function login(user, successCb, failCb) {
  const success = (data) => ({
    type: "LOGIN_SUCCESS",
    payload: data,
  });
  const error = () => ({
    type: "LOGIN_ERROR",
  });
  return (dispatch) =>
    axios
      .post("http://localhost:8081/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(success(res.data));
        successCb();
      })
      .catch((e) => {
        dispatch(error(e.message));
        failCb(e.message);
      });
}

export function logout() {
  const success = () => ({
    type: "LOGOUT_SUCCESS",
  });
  const error = () => ({
    type: "LOGOUT_ERROR",
  });
  return (dispatch) =>
    axios
      .get("http://localhost:8081/logout", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => {
        localStorage.removeItem("token");
        dispatch(success());
      })
      .catch((e) => {
        dispatch(error(e.message));
      });
}
