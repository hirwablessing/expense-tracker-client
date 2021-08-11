import React, { useEffect, useState } from "react";
import IncomeChart from "../components/IncomeChart";
import Dashboard from "../layouts/Dashboard";
import { getTotalIncomeByMonth } from "../services/all.service";

interface IncomeI {
  month: string;
  total: number;
}

interface IncomesI {
  incomes: Array<IncomeI>;
}

export default function Incomes() {
  const [incomes, setIncomes] = useState<any>([]);
  return (
    <Dashboard>
      <IncomeChart />
    </Dashboard>
  );
}
