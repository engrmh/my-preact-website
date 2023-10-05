import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
