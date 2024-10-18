import React from "react";
import { MdAccountBox, MdDashboard, MdSettings } from "react-icons/md";
import NavItem from "../CustomComponents/NavItem/NavItem";
import "./index.css";
export default function () {
  return (
    <div className="btm_menu_bar">
      <NavItem icon={<MdDashboard />} name={"DashBoard"} to="/" />
      <NavItem icon={<MdAccountBox />} name={"Accounts"} to="account" />
      <NavItem icon={<MdSettings />} name={"Settings"} to="settings" />
    </div>
  );
}
