import React from "react";
import CustomButton from "../components/CustomComponents/Button";

export default function Accounts() {
  return (
    <div>
      <CustomButton
        onClick={() => localStorage.removeItem("authToken")}
        name="Logout"
      />
    </div>
  );
}
