import React from "react";

export interface NavbarProps {
  title: string;
  subtitle: string;
}

function Navbar(props: NavbarProps) {
  const profile = {
    name: "John Doe",
    account_type: "Admin",
  };

  return (
    <div className="bg-white rounded p-3 border flex gap-5 items-center">
      <div className="2-1/2">
        <div>
          <h1 className="block font-bold text-lg">{props.title}</h1>
          <h2>{props.subtitle}</h2>
        </div>
      </div>

      <div className="w-1/2">
        <div className="grid grid-cols-2 gap-3 float-right">
          <div className="block text-sm">
            <h1>{profile.name}</h1>
            <h2>{profile.account_type}</h2>
          </div>
          <div className="rounded-full shadow-lg w-1/2 bg-blue-500 h-24"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
