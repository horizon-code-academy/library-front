import axios from "axios";

export function getAllStudents() {
  const success = (data) => ({
    type: "GET_ALL_STUDENTS_SUCCESS",
    payload: data,
  });
  const error = (data) => ({
    type: "GET_ALL_STUDENTS_ERROR",
  });
  return (dispatch) =>
    axios
      .get("http://localhost:8081/students", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        dispatch(success(res.data));
      })
      .catch((e) => {
        dispatch(error(e.message));
      });
}

export function getOneStudent(id, successCb, failCb) {
  const success = () => ({
    type: "GET_STUDENT_SUCCESS",
  });
  const error = () => ({
    type: "GET_STUDENT_ERROR",
  });
  return (dispatch) =>
    axios
      .get("http://localhost:8081/students/" + id, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        dispatch(success());
        successCb(res.data);
      })
      .catch((e) => {
        dispatch(error(e.message));
        failCb({ message: "unauthorized or bad request!" });
      });
}
export function addStudent(student, successCb, failCb) {
  const success = () => ({
    type: "ADD_STUDENT_SUCCESS",
  });
  const error = () => ({
    type: "ADD_STUDENT_ERROR",
  });
  return (dispatch) =>
    axios
      .post("http://localhost:8081/students", student, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => {
        dispatch(success());
        successCb();
      })
      .catch((e) => {
        dispatch(error(e.message));
        failCb({ message: "unauthorized or bad request!" });
      });
}

export function updateStudent(student, successCb, failCb) {
  const success = () => ({
    type: "UPDATE_STUDENT_SUCCESS",
  });
  const error = () => ({
    type: "UPDATE_STUDENT_ERROR",
  });
  return (dispatch) =>
    axios
      .put("http://localhost:8081/students/" + student._id, student, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => {
        dispatch(success());
        successCb();
      })
      .catch((e) => {
        dispatch(error());
        failCb({ message: "unauthorized or bad request!" });
      });
}

export function deleteStudent(id, successCb, failCb) {
  const success = () => ({
    type: "DELETE_STUDENT_SUCCESS",
  });
  const error = () => ({
    type: "DELETE_STUDENT_ERROR",
  });
  return (dispatch) =>
    axios
      .delete("http://localhost:8081/students/" + id, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => {
        dispatch(success());
        successCb();
      })
      .catch((e) => {
        dispatch(error());
        failCb({ message: "unauthorized or bad request!" });
      });
}
