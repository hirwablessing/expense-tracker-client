import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Dashboard from "../layouts/Dashboard";
import IncomeChart from "../components/IncomeChart";
import {
  getTotalExpenses,
  getTotalIncomes,
  getTotalTransactions,
} from "../services/Authentication.service";

export default function Home() {
  const [totalIncomes, setIncomes] = useState<number>(0);
  const [totalExpenses, setExpenses] = useState<number>(0);
  const [totalTransactions, setTransactions] = useState<number>(0);

  useEffect(() => {
    const getTotal = async () => {
      let income = await getTotalIncomes();
      let expense = await getTotalExpenses();
      let transactions = await getTotalTransactions();

      setIncomes(income);
      setExpenses(expense);
      setTransactions(transactions);
    };

    getTotal();
  }, []);

  return (
    <Dashboard title="Expenses" subtitle="Statistics">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 p-5 lg:p-0">
        <Card total={totalIncomes} title="Incomes" img="" bgColor="#ec6448" />
        <Card total={totalExpenses} title="Expenses" img="" bgColor="#ec6448" />
        <Card
          total={totalTransactions}
          title="Total Transactions"
          img=""
          bgColor="#ec6448"
        />
      </div>
      <div className="bg-white rounded shadow-md my-2 w-full pb-10">
        <IncomeChart />
      </div>
    </Dashboard>
  );
}
