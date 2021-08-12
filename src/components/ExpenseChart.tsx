import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  getHighestExpense,
  getTotalExpenseByMonth,
  getTotalIncomeByMonth,
} from "../services/all.service";

// const globalAny: any = global;

// globalAny.global.tooltips.enabled = false;
// globalAny.global.legend.position = "bottom";

export default function ExpenseChart() {
  const [totalExpense, setExpenses] = useState([]);
  const [highExpense, setHighExpense] = useState("");

  useEffect(() => {
    const getIncomes = async (): Promise<void> => {
      let incomes = await getTotalExpenseByMonth();

      let newArr: any = Array(12).fill(0);
      incomes.forEach((x: any) => {
        newArr[x.month] = x.total;
      });

      const highExpense = await getHighestExpense();

      setHighExpense(highExpense);
      setExpenses(newArr);
    };

    getIncomes();
  }, []);

  return (
    <>
      <div>
        <Pie
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "June",
              "July",
              "Aug",
              "Sept",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "# of income",
                data: totalExpense,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
              // {
              //   label: 'Quantity',
              //   data: [47, 52, 67, 58, 9, 50],
              //   backgroundColor: 'orange',
              //   borderColor: 'red',
              // },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>

      <h4 className="font-medium text-sm my-4 flex flex-row items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
            fill="rgba(255,125,125,1)"
          />
        </svg>
        You're spending too much on:{" "}
        <span className="text-red-500">{highExpense}</span>
      </h4>
    </>
  );
}
