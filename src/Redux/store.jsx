import { createStore } from "preact-redux";
import rootReducers from "./Stores/combinerReducers.jsx";

const store = createStore(rootReducers);

export default store;
