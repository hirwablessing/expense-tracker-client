import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  getTotalExpenseByMonth,
  getTotalIncomeByMonth,
} from "../services/all.service";

// const globalAny: any = global;

// globalAny.global.tooltips.enabled = false;
// globalAny.global.legend.position = "bottom";

export default function ExpenseChart() {
  const [totalExpense, setExpenses] = useState([]);

  useEffect(() => {
    const getIncomes = async (): Promise<void> => {
      let incomes = await getTotalExpenseByMonth();

      let newArr: any = Array(12).fill(0);
      incomes.forEach((x: any) => {
        newArr[x.month] = x.total;
      });

      setExpenses(newArr);
    };

    getIncomes();
  }, []);

  return (
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
  );
}
