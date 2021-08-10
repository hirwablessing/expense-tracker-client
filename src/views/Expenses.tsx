import React from "react";
import ExpenseChart from "../components/ExpenseChart";
import Dashboard from "../layouts/Dashboard";

export default function Expenses() {
  return (
    <Dashboard>
      <ExpenseChart />
    </Dashboard>
  );
}
