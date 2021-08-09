import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IUser } from "../types/";
import { UserContext } from "./UserContext";

export const MainContext: React.FC = ({ children }) => {
  const router = useHistory();
  const [user, setUser] = useState<IUser>({
    names: "",
    email: "",
    password: "",
  });

  //   function to logout
  const logout = () => {
    localStorage.clear();
    router.push("/");
  };

  useEffect(() => {
    let data: any = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(data);

    if (!data?._id) {
      router.push("/");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
