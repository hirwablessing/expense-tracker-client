import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { MainContext } from "./context/MainContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainContext>
        <App />
      </MainContext>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
