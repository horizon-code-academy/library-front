export default function studentsReducer(state = [], action) {
  switch (action.type) {
    case "GET_ALL_STUDENTS":
      return action.payload;
    case "GET_ONE_STUDENT":
      return state;
    case "CREATE_STUDENT":
      return state;
    case "UPDATE_STUDENT":
      return state;
    case "DELETE_STUDENT":
      return state;
    default:
      return state;
  }
}