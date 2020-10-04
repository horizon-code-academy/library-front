export default function booksReducer(state = [], action) {
  switch (action.type) {
    case "GET_ALL_BOOKS_SUCCESS":
      return action.payload;
    case "GET_ALL_BOOKS_ERROR":
      return state;
    case "GET_ONE_BOOK":
      return state;
    case "CREATE_BOOK":
      return state;
    case "UPDATE_BOOK":
      return state;
    case "DELETE_BOOK":
      return state;
    default:
      return state;
  }
}