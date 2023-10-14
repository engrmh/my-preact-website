// import taskReducer from "./Stores/Tasks";
import userSlice from "./Stores/Users";
import projectSlice from "./Stores/Projects";
// import notifReducer from "./Stores/Notifs";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
      // tasks: tasksSlice,
      users: userSlice,
      projects: projectSlice,
      // notifs:notifSlice
  },
});

export default store;
