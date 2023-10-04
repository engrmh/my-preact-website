import { combineReducers } from "redux";
import taskReducer from "./Tasks";

const rootReducers = combineReducers({
  taskReducer,
});

export default rootReducers;
