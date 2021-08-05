import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MenuLinks } from "../../resources/MenuLinks";

function Sidebar() {
  const router = useLocation();

  return (
    <div className="block shadow bg-white p-5 rounded h-full">
      <div className="app-heade items-center">
        <h2>LOGO</h2>
      </div>

      <div className="app-menu mt-10 mb-4 text-sm">
        <h1>Overview</h1>
        {MenuLinks?.map((link: any, i) => {
          return (
            <NavLink to={link.pathname} key={i}>
              <a
                className={
                  router.pathname === link.pathname
                    ? "w-full flex gap-3 items-center my-4 active"
                    : "w-full flex gap-3 items-center my-4"
                }
              >
                link.icon
                {link.name}
              </a>
            </NavLink>
          );
        })}

        <button className="bg-[#ec6448] text-center">Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
