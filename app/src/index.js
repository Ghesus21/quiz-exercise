import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.scss";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
