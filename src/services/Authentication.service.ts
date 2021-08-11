import axios from "axios";
import { AuthenticationData } from "../types";

axios.defaults.headers.common = {
  Authorization: `Bearer ${JSON.parse(localStorage.getItem("token") || "")}`,
};

axios.defaults.baseURL = "http://localhost:5000/api/";

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

const getTotalIncomes = async (): Promise<void> => {
  let total = await axios.get("transactions/expenses");
  return total.data.data;
};

const getTotalExpenses = async (): Promise<void> => {
  let total = await axios.get("transactions/expenses");
  return total.data.data;
};

const postTransaction = async () => {
  // let user = await axios.post(`${BASE_URL}users/login`, { email, password });
  // return user.data;

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTEwMDM4ZjgxY2Q3YjViYTA4MWYzMjgiLCJuYW1lcyI6IkhpcndhIEJsZXNzaW5nIiwiZW1haWwiOiJibGVzc2luZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRGcElOdUJ3ZUFqT2E0Z2NLZTZESXl1OGEwSHRadmpUQ1dtR0tQR2ltNzBjTmJYaS91V2QxVyIsImlhdCI6MTYyODYxMjM3NiwiZXhwIjozLjYwMDAwMDAwMDAwMDAxNjZlKzIzfQ.yNsEJ-4B4b3kfaM4N2l-NbxEam7tSIXMs5kfmiDIXgs";

  axios
    .post(
      `transactions/`,
      {
        amount: 10000,
        type: "income",
        mode: "Bank",
        note: "This is the money I gained on selling drinks",
      },
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export { login, register, getTotalIncomes, getTotalExpenses };
