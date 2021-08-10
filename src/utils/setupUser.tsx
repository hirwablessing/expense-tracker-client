import jwt_decode from "jwt-decode";
import { IUser } from "../types";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import { useContext } from "react";

export const setupUser = (loggedInUser: any) => {
  const history = useHistory();
  const { setUser, user } = useContext(UserContext);

  let userDecodedInfo: any = jwt_decode(loggedInUser?.token);
  const newUser: IUser = (({ _id, names, email, password }) => ({
    _id,
    names,
    email,
    password,
  }))(userDecodedInfo);

  setUser(newUser);

  localStorage.setItem("user", JSON.stringify(newUser));
  history.push("/home");
};
