import axios from "axios";

export function getAllStudents() {
  const success = (data) => ({
    type: "GET_ALL_STUDENTS_SUCCESS",
    payload: data,
  });
  const error = (data) => ({
    type: "GET_ALL_Students_ERROR",
  });
  return (dispatch) =>
    axios
      .get("http://localhost:8081/students")
      .then((res) => {
        dispatch(success(res.data));
      })
      .catch((e) => {
        dispatch(error(e.message));
      });
}
