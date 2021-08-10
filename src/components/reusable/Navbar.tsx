import React from "react";
import { NavbarProps } from "../../types";

function Navbar(props: NavbarProps) {
  const profile = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="bg-white rounded p-3 border flex gap-5 items-center">
      <div className="w-1/2">
        <div>
          <h1 className="block font-bold text-lg">{props.title}</h1>
          <h2 className="text-gray-400 text-sm">{props.subtitle}</h2>
        </div>
      </div>
      <div className="w-1/2">
        <div className="grid grid-cols-2 gap-3 float-right">
          <div className="block text-sm">
            <h1 className="block font-bold">{profile.names}</h1>
            <h2 className="text-gray-400 text-sm">{profile.email}</h2>
          </div>
          <div className="rounded-full shadow-xl w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
