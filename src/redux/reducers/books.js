export default function booksReducer(state = [], action) {
  switch (action.type) {
    case "GET_ALL_BOOKS_SUCCESS":
      return action.payload;
    case "GET_ALL_BOOKS_ERROR":
      return state;
    case "GET_BOOK_SUCCESS":
      return state;
    case "GET_BOOK_ERROR":
      return state;
    case "ADD_BOOK_SUCCESS":
      return state;
    case "ADD_BOOK_ERROR":
      return state;
    case "UPDATE_BOOK_SUCCESS":
      return state;
    case "UPDATE_BOOK_ERROR":
      return state;
    case "DELETE_BOOK_SUCCESS":
      return state;
    case "DELETE_BOOK_ERROR":
      return state;
    default:
      return state;
  }
}
