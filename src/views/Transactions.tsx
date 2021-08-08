import React from "react";
import TransactionList from "../components/TransactionList";
import Dashboard from "../layouts/Dashboard";

function Transactions() {
  return (
    <Dashboard>
      <TransactionList />
    </Dashboard>
  );
}

export default Transactions;
