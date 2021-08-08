import React from "react";
import Expense from "../components/ExpenseChart";
import Dashboard from "../layouts/Dashboard";

export default function Expenses() {
  return (
    <Dashboard>
      <Expense />
    </Dashboard>
  );
}
