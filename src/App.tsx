import React from "react";
import { Route, Switch } from "react-router-dom";
import Expenses from "./views/Expenses";

import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Transactions from "./views/Transactions";

const App = () => {
  return (
    // <h2>hi there</h2>

    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route exact path="/register">
        <Register />
      </Route>

      <Route exact path="/home">
        <Home />
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
