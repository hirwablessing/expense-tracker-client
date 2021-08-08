import React from "react";
import { Pie, defaults } from "react-chartjs-2";

// const globalAny: any = global;

// globalAny.global.tooltips.enabled = false;
// globalAny.global.legend.position = "bottom";

export default function IncomeChart() {
  const data2019 = [
    {
      name: "Jan 2019",
      Approved: 3432,
      Pending: 2342,
      Rejected: 343,
    },
    {
      name: "Feb 2019",
      Approved: 2342,
      Pending: 3246,
      Rejected: 3431,
    },
    {
      name: "Mar 2019",
      Approved: 4565,
      Pending: 4556,
      Rejected: 343,
    },
    {
      name: "Apr 2019",
      Approved: 6654,
      Pending: 4465,
      Rejected: 343,
    },
    {
      name: "May 2019",
      Approved: 8765,
      Pending: 4553,
      Rejected: 456,
    },
    {
      name: "June 2019",
      Approved: 8765,
      Pending: 4553,
      Rejected: 456,
    },
    {
      name: "July 2019",
      Approved: 8765,
      Pending: 4553,
      Rejected: 456,
    },
    {
      name: "Aug 2019",
      Approved: 8765,
      Pending: 4553,
      Rejected: 456,
    },
    {
      name: "Sept 2019",
      Approved: 8765,
      Pending: 4553,
      Rejected: 456,
    },
    {
      name: "Oct 2019",
      Approved: 8765,
      Pending: 4553,
      Rejected: 456,
    },
    {
      name: "Nov 2019",
      Approved: 8765,
      Pending: 4553,
      Rejected: 456,
    },
    {
      name: "Dec 2019",
      Approved: 8765,
      Pending: 4553,
      Rejected: 456,
    },
  ];
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
              data: [12, 19, 3, 5, 2, 3, 43, 21, 12, 10, 31, 20],
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
