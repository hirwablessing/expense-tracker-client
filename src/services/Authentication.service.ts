import axios from "axios";
import BASE_URL from "../base";

interface LoginData {
  email: string;
  password: string;
}

const login = async ({ email, password }: LoginData) => {
  let user = await axios.post(`${BASE_URL}users/login`, { email, password });
  return user.data;
};

export { login };
