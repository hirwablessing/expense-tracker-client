/* eslint-disable @next/next/no-img-element */

import React, { useContext } from "react";
import parse from "html-react-parser";
import { NavLink, useLocation } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import { MenuLinksProps } from "../../types";
import { MenuLinks } from "../../resources/MenuLinks";

export default function Sidebar() {
  const { logout } = useContext(UserContext);

  const router = useLocation();
  return (
    <div className="block shadow bg-white p-5 rounded h-screen">
      <div className="app-header flex gap-2 ">
        <h2 className="uppercase font-bold">logo</h2>
      </div>

      <div className="app-menu mt-10 text-sm flex flex-col items-center justify-center">
        {MenuLinks?.map((link: MenuLinksProps) => {
          return (
            <NavLink
              to={link.path}
              key={link.name}
              className={
                router.pathname === link.path
                  ? "w-full flex gap-3 items-center my-2 active"
                  : "w-full flex gap-3 items-center my-2"
              }
            >
              {parse(link.icon)}
              {link.name}
            </NavLink>
          );
        })}
        <button
          className="bg-[#ec6448] text-center text-white rounded p-2 w-52  my-20 justify-self-start"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
