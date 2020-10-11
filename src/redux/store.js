import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import books from "./reducers/books";
import students from "./reducers/students";
import users from "./reducers/users";
import auth from "./reducers/auth";

const rootReducer = combineReducers({
  books,
  students,
  users,
  auth,
});

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(loggerMiddleware);
}

const middleWareEnhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

export default store;
