import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Expenses from "./views/Expenses";

import Home from "./views/Home";

const App = () => {
  return (
    // <h2>hi there</h2>

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/expenses">
          <Expenses />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
