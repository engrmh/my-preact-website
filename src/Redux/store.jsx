import taskReducer from "./Stores/Tasks";
import { createStore, combineReducers } from "redux";

// const store = createStore(rootReducers);
const store = createStore(taskReducer);

export default store;
