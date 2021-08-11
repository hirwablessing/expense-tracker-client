import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import { postTransaction } from "../services/all.service";
import { setupUser } from "../utils/setupUser";

export default function AddTransaction() {
  const [amount, setAmount] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [mode, setMode] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const history = useHistory();

  const addTransaction = async (): Promise<void> => {
    try {
      await postTransaction({
        amount,
        type,
        mode,
        note,
      });

      history.push("/transactions");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Sign up
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Sign up to access your account
            </p>
          </div>
          <div className="m-7">
            <form action="">
              <div className="mb-6">
                <label
                  htmlFor="amount"
                  className="block mb-2 text-sm text-gray-600 capitalize dark:text-gray-400"
                >
                  amount
                </label>
                <input
                  type="text"
                  name="amount"
                  value={amount}
                  placeholder="John Doe"
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-red-100 focus:border-[#ec6448]  dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="type"
                  className="block mb-2 text-sm capitalize text-gray-600 dark:text-gray-400"
                >
                  type
                </label>
                <input
                  type="text"
                  name="type"
                  value={type}
                  placeholder="Income"
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-red-100 focus:border-[#ec6448]  dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                />
              </div>
              <div className="mb-6">
                <div className="mb-2">
                  <label
                    htmlFor="mode"
                    className="text-sm capitalize text-gray-600 dark:text-gray-400"
                  >
                    mode
                  </label>
                </div>
                <input
                  type="text"
                  name="mode"
                  value={mode}
                  placeholder="Cash,Bank,...."
                  onChange={(e) => setMode(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-red-100 focus:border-[#ec6448]  dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="type"
                  className="block mb-2 text-sm capitalize text-gray-600 dark:text-gray-400"
                >
                  type
                </label>
                <input
                  type="text"
                  name="note"
                  value={note}
                  placeholder="Donation"
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-red-100 focus:border-[#ec6448]  dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                />
              </div>

              <div className="mb-6">
                <button
                  type="button"
                  className="w-full capitalize px-3 py-4 text-white bg-[#ec6448] rounded-md focus:bg-[#ec6448] focus:outline-none"
                  onClick={addTransaction}
                >
                  save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
