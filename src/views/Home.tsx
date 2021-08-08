import React from "react";
import Card from "../components/Card";
import Dashboard from "../layouts/Dashboard";
import IncomeChart from "../components/IncomeChart";

export default function Home() {
  return (
    <Dashboard navTitle="Expenses" subtitle="Statistics">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 p-5 lg:p-0">
        <Card total={345} title="Expenses" img="" bgColor="#ec6448" />
        <Card total={345} title="Expenses" img="" bgColor="#ec6448" />
        <Card total={345} title="Income" img="" bgColor="#ec6448" />
      </div>
      <div className="bg-white rounded shadow-md my-2 w-full overflow-auto pb-10">
        <IncomeChart />
      </div>
    </Dashboard>
  );
}
