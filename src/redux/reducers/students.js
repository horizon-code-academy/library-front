export default function booksReducer(state = [], action) {
  switch (action.type) {
    case "GET_ALL_STUDENTS_SUCCESS":
      return action.payload;
    case "GET_ALL_STUDENTS_ERROR":
      return state;
    case "GET_ONE_STUDENT":
      return state;
    case "ADD_STUDENT_SUCCESS":
      return state;
    case "ADD_STUDENT_ERROR":
      return state;
    case "UPDATE_STUDENT_SUCCESS":
      return state;
    case "UPDATE_STUDENT_ERROR":
      return state;
    case "DELETE_STUDENT_SUCCESS":
      return state;
    case "DELETE_STUDENT_ERROR":
      return state;
    default:
      return state;
  }
}
