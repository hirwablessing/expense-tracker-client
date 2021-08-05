import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Card from "./components/Card";
import Dashboard from "./layouts/Dashboard";
import Home from "./views/Home";

const App = () => {
  return (
    // <h2>hi there</h2>

    <Router>
      <Dashboard navTitle="Expenses" subtitle="Statistics">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 p-5 lg:p-0">
          <Card total={345} title="Expenses" img="" bgColor="#ec6448" />
          <Card total={345} title="Expenses" img="" bgColor="#ec6448" />
          <Card total={345} title="Income" img="" bgColor="#ec6448" />
        </div>
      </Dashboard>
    </Router>
  );
};

export default App;
