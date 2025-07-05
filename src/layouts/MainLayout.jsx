import React from "react";
import SideNav from "./components/SideNav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#f9f9ff] font-baloo">
      <SideNav />

      {/* <div className="px-4">
        <Outlet></Outlet>
      </div> */}
    </div>
  );
};

export default MainLayout;
