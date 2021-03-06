import React, { useEffect, useState } from "react";
import { Pie, defaults } from "react-chartjs-2";
import { getTotalIncomeByMonth } from "../services/all.service";

export default function IncomeChart() {
  const [totalIncome, setIncomes] = useState([]);

  useEffect(() => {
    const getIncomes = async (): Promise<void> => {
      let incomes = await getTotalIncomeByMonth();

      let newArr: any = Array(12).fill(0);
      incomes.forEach((x: any) => {
        newArr[x.month] = x.total;
      });

      setIncomes(newArr);
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
              data: totalIncome,
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
