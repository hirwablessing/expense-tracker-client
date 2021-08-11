import React, { useEffect, useState } from "react";
import { getAllTransactions } from "../services/all.service";
export default function TransactionList() {
  const [transactions, setTransactions] = useState<any>();

  useEffect(() => {
    const getTransactions = async (): Promise<void> => {
      let transactions = await getAllTransactions();

      setTransactions(transactions);
    };

    getTransactions();
  }, []);

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
              {transactions?.map((transaction: any, index: number) => (
                <tr className="text-gray-700">
                  <td className="px-4 py-3 text-sm border">
                    <p className="font-semibold text-black">{index + 1}</p>
                  </td>
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold text-black">
                          {transaction.note}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-ms font-semibold border">
                    {transaction.amount}
                  </td>
                  <td className="px-4 py-3 text-xs border">
                    <span
                      className={`px-2 py-1 font-semibold leading-tight rounded ${
                        transaction.type === "income"
                          ? "text-green-700 bg-green-100"
                          : "text-red-700 bg-red-100"
                      }`}
                    >
                      {" "}
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border">
                    {transaction.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
