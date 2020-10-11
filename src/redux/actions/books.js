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
      .get("http://localhost:8081/books", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        dispatch(success(res.data));
      })
      .catch((e) => {
        dispatch(error(e.message));
      });
}

export function getOneBook(id, successCb, failCb) {
  const success = () => ({
    type: "GET_BOOK_SUCCESS",
  });
  const error = () => ({
    type: "GET_BOOK_ERROR",
  });
  return (dispatch) =>
    axios
      .get("http://localhost:8081/books/" + id, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        dispatch(success());
        successCb(res.data);
      })
      .catch((e) => {
        dispatch(error(e.message));
        failCb();
      });
}

export function addBook(book, successCb, failCb) {
  const success = () => ({
    type: "ADD_BOOK_SUCCESS",
  });
  const error = () => ({
    type: "ADD_BOOK_ERROR",
  });
  return (dispatch) =>
    axios
      .post("http://localhost:8081/books", book, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => {
        dispatch(success());
        successCb();
      })
      .catch((e) => {
        dispatch(error(e.message));
        failCb();
      });
}

export function updateBook(book, successCb, failCb) {
  const success = () => ({
    type: "UPDATE_BOOK_SUCCESS",
  });
  const error = () => ({
    type: "UPDATE_BOOK_ERROR",
  });
  return (dispatch) =>
    axios
      .put("http://localhost:8081/books/" + book._id, book, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => {
        dispatch(success());
        successCb();
      })
      .catch((e) => {
        dispatch(error());
        failCb();
      });
}

export function deleteBook(id, successCb, failCb) {
  const success = () => ({
    type: "DELETE_BOOK_SUCCESS",
  });
  const error = () => ({
    type: "DELETE_BOOK_ERROR",
  });
  return (dispatch) =>
    axios
      .delete("http://localhost:8081/books/" + id, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(() => {
        dispatch(success());
        successCb();
      })
      .catch((e) => {
        dispatch(error());
        failCb();
      });
}
