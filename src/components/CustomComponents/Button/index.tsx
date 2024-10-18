import React from "react";
import "./index.css";
export default function CustomButton(props) {
  return (
    <button className="button-3d" {...props}>
      {props.name}
    </button>
  );
}
