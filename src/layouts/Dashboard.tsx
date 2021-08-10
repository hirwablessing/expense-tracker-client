import React from "react";

import Navbar from "../components/reusable/Navbar";
import Sidebar from "../components/reusable/Sidebar";
import { DashboardProps } from "../types";

function Dashboard(props: DashboardProps) {
  return (
    <div className="bg-gray-50 h-screen">
      {/* inner block */}
      <div className="lg:flex gap-5 lg:p-5 h-5/6">
        <div className="lg:w-1/5 h-full top-0 lg:sticky">
          <Sidebar />
        </div>
        {/* navbar and body */}
        <div className="block lg:w-4/5">
          <div className="hidden lg:block">
            <Navbar title={props.title ?? ""} subtitle={props.subtitle ?? ""} />
          </div>
          <div className="block w-full h-full py-5">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
