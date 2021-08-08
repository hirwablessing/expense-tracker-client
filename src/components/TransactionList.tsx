import React from "react";
import { Icons } from "../resources/Icons";
import parse from "html-react-parser";
export default function TransactionList() {
  const data = [
    {
      name: "Eric McKinnon",
      location: "Nigeria",
      status: "Active",
      login_status: "Last login: 14/APR/2020",
      email: "ericmckin@gmail.com",
      revenue: "$58,200",
    },
    {
      name: "Eric McKinnon",
      location: "Nigeria",
      status: "Active",
      login_status: "Last login: 14/APR/2020",
      email: "ericmckin@gmail.com",
      revenue: "$58,200",
    },
    {
      name: "Eric McKinnon",
      location: "Nigeria",
      status: "Innactive",
      login_status: "Last login: 14/APR/2020",
      email: "ericmckin@gmail.com",
      revenue: "$58,200",
    },
    {
      name: "Eric McKinnon",
      location: "Nigeria",
      status: "Active",
      login_status: "Last login: 14/APR/2020",
      email: "ericmckin@gmail.com",
      revenue: "$58,200",
    },
    {
      name: "Eric McKinnon",
      location: "Nigeria",
      status: "Innactive",
      login_status: "Last login: 14/APR/2020",
      email: "ericmckin@gmail.com",
      revenue: "$58,200",
    },
    {
      name: "Eric McKinnon",
      location: "Nigeria",
      status: "Innactive",
      login_status: "Last login: 14/APR/2020",
      email: "ericmckin@gmail.com",
      revenue: "$58,200",
    },
  ];
  return (
    <div className="container mx-auto p-6">
      <div className="w-full mb-8 rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto md:overflow-x-hidden">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 capitalize border-b border-gray-600">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Amount($)</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="text-gray-700">
                <td className="px-4 py-3 text-sm border">
                  <p className="font-semibold text-black">1.</p>
                </td>
                <td className="px-4 py-3 border">
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold text-black">School fees</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                <td className="px-4 py-3 text-xs border">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    {" "}
                    Income{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border">6/4/2000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
