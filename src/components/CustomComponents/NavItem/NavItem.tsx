import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function NavItem({ name, icon, to }) {
  return (
    <Link style={{ textDecoration: "none" }} to={to}>
      <div className="nav_item">
        {icon}
        <p className="nav_title">{name}</p>
      </div>
    </Link>
  );
}
