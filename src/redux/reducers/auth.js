export default function authReducer(
  state = { token: localStorage.getItem("token") },
  action
) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.payload;
    case "LOGIN_ERROR":
      return state;
    case "LOGOUT_SUCCESS":
      return { ...state, token: undefined };
    case "LOGOUT_ERROR":
      return state;
    default:
      return state;
  }
}
