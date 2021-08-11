import jwt_decode from "jwt-decode";
import { IUser } from "../types";

export const setupUser = async (loggedInUser: any) => {
  let userDecodedInfo: any = await jwt_decode(loggedInUser?.token);
  const newUser: IUser = (({ _id, names, email, password }): IUser => ({
    _id,
    names,
    email,
    password,
  }))(userDecodedInfo);

  localStorage.setItem("user", JSON.stringify(newUser));
  localStorage.setItem("token", JSON.stringify(loggedInUser?.token));

  return newUser;
};
