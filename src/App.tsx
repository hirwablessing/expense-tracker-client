import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Expenses from "./views/Expenses";

import Home from "./views/Home";
import Incomes from "./views/Incomes";
import Login from "./views/Login";
import Register from "./views/Register";
import Transactions from "./views/Transactions";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    // <h2>hi there</h2>

    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/register">
        <Register />
      </Route>

      {user?._id && (
        <>
          <Route exact path="/income">
            <Login />
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
        </>
      )}
    </Switch>
  );
};

export default App;
