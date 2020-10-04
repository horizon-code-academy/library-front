import axios from "axios";

export function getAllBooks() {
  const success = (data) => ({
    type: "GET_ALL_BOOKS_SUCCESS",
    payload: data,
  });
  const error = (data) => ({
    type: "GET_ALL_BOOKS_ERROR",
  });
  return (dispatch) =>
    axios
      .get("http://localhost:8081/books")
      .then((res) => {
        dispatch(success(res.data));
      })
      .catch((e) => {
        dispatch(error(e.message));
      });
}
