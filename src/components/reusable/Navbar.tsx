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
      <div className="w-1/2">
        <div>
          <h1 className="block font-bold text-lg">{props.title}</h1>
          <h2 className="text-gray-400 text-sm">{props.subtitle}</h2>
        </div>
      </div>
      <div className="w-1/2">
        <div className="grid grid-cols-2 gap-3 float-right">
          <div className="block text-sm">
            <h1 className="block font-bold">{profile.name}</h1>
            <h2 className="text-gray-400 text-sm">{profile.account_type}</h2>
          </div>
          <div className="rounded-full shadow-xl w-1/2">
            <img src="./user.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
