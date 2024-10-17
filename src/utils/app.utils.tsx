import { Navigate } from "react-router-dom";

// Mock authentication function
export const isAuthenticated = () => {
  // You can replace this with real authentication logic (JWT, session check, etc.)
  return !!localStorage.getItem("authToken");
};
