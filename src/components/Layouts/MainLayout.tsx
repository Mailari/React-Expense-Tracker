import React from "react";
import SideMenuBar from "./SideMenuBar";
import { Outlet } from "react-router-dom";
import BottomNavBar from "./BottomNavBar";
import "./index.css";

export default function MainLayout() {
  return (
    <div className="main_layout">
      <SideMenuBar />
      <div className="outlet">
        <Outlet />
      </div>
      <BottomNavBar />
    </div>
  );
}
