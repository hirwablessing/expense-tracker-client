/* eslint-disable @next/next/no-img-element */

import React from "react";
import parse from "html-react-parser";
import { NavLink, useLocation } from "react-router-dom";
import { MenuLinks } from "../../resources/MenuLinks";

export default function Sidebar() {
  const router = useLocation();
  return (
    <div className="block shadow bg-white p-5 rounded h-screen">
      <div className="app-header flex gap-2 items-center">
        <h2>logo</h2>
      </div>

      <div className="app-menu mt-10 text-sm flex flex-col items-center justify-center">
        {MenuLinks?.map((link: any, i) => {
          console.log(router.pathname === link.path);
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
        <button className="bg-[#ec6448] text-center text-white rounded p-2 w-52 md:absolute md:bottom-0 my-10">
          Logout
        </button>
      </div>
    </div>
  );
}
