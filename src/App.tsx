import React from "react";
import { Route, Switch } from "react-router-dom";
import Expenses from "./views/Expenses";

import Home from "./views/Home";
import Incomes from "./views/Incomes";
import Login from "./views/Login";
import Register from "./views/Register";
import Transactions from "./views/Transactions";

const App = () => {
  console.log("env variable: ", import.meta.env.SOME_KEY);
  return (
    // <h2>hi there</h2>

    <Switch>
      <Route exact path="/">
        <h2>welcome to the app</h2>
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/income">
        <Login />
      </Route>

      <Route exact path="/register">
        <Register />
      </Route>

      <Route exact path="/home">
        <Home />
      </Route>

      <Route exact path="/incomes">
        <Incomes />
      </Route>

      <Route exact path="/expenses">
        <Expenses />
      </Route>

      <Route exact path="/transactions">
        <Transactions />
      </Route>
    </Switch>
  );
};

export default App;
