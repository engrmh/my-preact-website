import { combineReducers, legacy_createStore } from "redux";
import taskReducer from "./Stores/Tasks";
import userReducer from "./Stores/Users.jsx";

const store = legacy_createStore(
  combineReducers({
    taskReducer,
    userReducer,
  })
);

export default store;
