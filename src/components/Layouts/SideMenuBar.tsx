import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import NavItem from "../CustomComponents/NavItem/NavItem";
import {
  MdAccountBox,
  MdDashboard,
  MdLogout,
  MdSettings,
} from "react-icons/md";

export default function SideMenuBar(props) {
  return (
    <div className="side_menu_bar">
      <NavItem icon={<MdDashboard />} name={"DashBoard"} to="/" />
      <NavItem icon={<MdSettings />} name={"Settings"} to="settings" />
      <NavItem icon={<MdAccountBox />} name={"Accounts"} to="account" />
    </div>
  );
}
