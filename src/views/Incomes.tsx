import React, { useEffect, useState } from "react";
import IncomeChart from "../components/IncomeChart";
import Dashboard from "../layouts/Dashboard";
import { getTotalIncomeByMonth } from "../services/Authentication.service";

interface IncomeI {
  month: string;
  total: number;
}

interface IncomesI {
  incomes: Array<IncomeI>;
}

export default function Incomes() {
  const [incomes, setIncomes] = useState<any>([]);

  // useEffect(() => {
  //   const getIncomes = async (): Promise<void> => {
  //     let incomes = await getTotalIncomeByMonth();
  //     console.log(incomes);
  //     setIncomes(incomes);
  //   };

  //   getIncomes();
  // }, []);

  return (
    <Dashboard>
      <IncomeChart />
    </Dashboard>
  );
}
