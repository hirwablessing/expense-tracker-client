import React, { useEffect, useState } from "react";
import IncomeChart from "../components/IncomeChart";
import Dashboard from "../layouts/Dashboard";
import { getTotalIncomeByMonth } from "../services/all.service";

export default function Incomes() {
  return (
    <Dashboard>
      <IncomeChart />
    </Dashboard>
  );
}
