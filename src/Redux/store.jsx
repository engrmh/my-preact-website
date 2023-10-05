import { combineReducers, legacy_createStore } from "redux";
import taskReducer from "./Stores/Tasks";
import userReducer from "./Stores/Users.jsx";
import projectReducer from "./Stores/Projects.jsx";
import notifReducer from "./Stores/Notifs.jsx";

const store = legacy_createStore(
  combineReducers({
    taskReducer,
    userReducer,
    projectReducer,
    notifReducer,
  })
);

export default store;
