import React from "react";
import { useLocation } from "react-router-dom";
import { NavbarProps } from "../../types";

export default function Navbar(props: NavbarProps) {
  const profile = JSON.parse(localStorage.getItem("user") || "{}");
  const location = useLocation();

  return (
    <div className="bg-white rounded p-3 border flex gap-5 items-center">
      <div className="w-1/2">
        <div>
          <h1 className="block font-bold text-lg capitalize">
            {location.pathname.substring(1)}
          </h1>
          <h2 className="text-gray-400 text-sm">Information</h2>
        </div>
      </div>
      <div className="w-1/2">
        <div className="grid grid-cols-2 gap-3 float-right">
          <div className="block text-sm">
            <h1 className="block font-bold">{profile.names}</h1>
            <h2 className="text-gray-400 text-sm">{profile.email}</h2>
          </div>
          <div className="rounded-full shadow-xl w-10 h-10 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
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
