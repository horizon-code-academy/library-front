export default function usersReducer(state = [], action) {
  switch (action.type) {
    case "GET_ALL_USERS_SUCCESS":
      return action.payload;
    case "GET_ALL_USERS_ERROR":
      return state;
    case "GET_ONE_USER":
      return state;
    case "ADD_USER_SUCCESS":
      return state;
    case "ADD_USER_ERROR":
      return state;
    case "UPDATE_USER_SUCCESS":
      return state;
    case "UPDATE_USER_ERROR":
      return state;
    case "DELETE_USER_SUCCESS":
      return state;
    case "DELETE_USER_ERROR":
      return state;
    default:
      return state;
  }
}
