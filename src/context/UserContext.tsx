import { createContext, useContext } from "react";
import { IUser } from "../types";

export type GlobalContent = {
  user: IUser;
  setUser: (user: IUser) => void;
  logout: () => void;
};

export const UserContext = createContext<GlobalContent>({
  user: { _id: "", names: "", email: "", password: "" },
  setUser: () => {},
  logout: () => {},
});

export const UserGlobalContext = () => useContext(UserContext);
