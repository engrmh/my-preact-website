import taskReducer from "./Stores/Tasks";
import userReducer from "./Stores/Users.jsx";
import projectReducer from "./Stores/Projects.jsx";
import notifReducer from "./Stores/Notifs.jsx";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers(
  combineReducers({
    taskReducer,
    userReducer,
    projectReducer,
    notifReducer,
  })
);

const store = configureStore({
  reducer: rootReducer,
});

export default store;
