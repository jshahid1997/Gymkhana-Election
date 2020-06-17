import React from "react";
import { HashRouter as BrowserRouter, Switch } from "react-router-dom";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "../redux/configureStore";
import App from "./App";

const store = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
