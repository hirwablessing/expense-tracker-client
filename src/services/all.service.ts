import axios from "axios";
import { AuthenticationData, TransactionI } from "../types";

axios.defaults.headers.common = {
  Authorization: `Bearer ${JSON.parse(localStorage.getItem("token") || "{}")}`,
};

axios.defaults.baseURL = "https://express-tracker-server.herokuapp.com/";

const login = async ({ email, password }: AuthenticationData) => {
  let user = await axios.post("users/login", { email, password });
  return user.data;
};

const register = async ({ names, email, password }: AuthenticationData) => {
  let user = await axios.post("users/register", {
    names,
    email,
    password,
  });
  return user.data;
};

const getTotalIncomes = async (): Promise<number> => {
  let total = await axios.get("transactions/expenses");
  return total.data.data;
};

const getTotalExpenses = async (): Promise<number> => {
  let total = await axios.get("transactions/expenses");
  return total.data.data;
};

const getTotalTransactions = async (): Promise<number> => {
  let total = await axios.get("transactions/total");
  return total.data.data;
};

const getTotalIncomeByMonth = async (): Promise<[]> => {
  let total = await axios.get("transactions/incomes/total-month");
  return total.data.data;
};

const getTotalExpenseByMonth = async (): Promise<[]> => {
  let total = await axios.get("transactions/expenses/total-month");
  return total.data.data;
};

const getHighestExpense = async (): Promise<string> => {
  let expnese = await axios.get("transactions/expenses/highest");
  return expnese.data.data;
};

const getAllTransactions = async (): Promise<[]> => {
  let transactions = await axios.get("transactions/");
  return transactions.data.data;
};

const getTotalTransactionsByMonth = async (): Promise<[]> => {
  let transactions = await axios.get("transactions/total-month");
  return transactions.data.data;
};

const postTransaction = async (body: TransactionI): Promise<void> => {
  axios
    .post("/transactions", body)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      alert(error.message);
    });
};

export {
  login,
  register,
  getTotalIncomes,
  getTotalIncomeByMonth,
  getTotalExpenses,
  getTotalExpenseByMonth,
  getHighestExpense,
  getTotalTransactions,
  getTotalTransactionsByMonth,
  getAllTransactions,
  postTransaction,
};
