import { jwtDecode } from "jwt-decode";

export const isAuthenticated = () => {
  const token = localStorage.getItem("authToken");
  if (!token) return false;
  const payload = jwtDecode(token);
  const now = Math.floor(new Date().getTime() / 1000);
  return payload.exp > now;
};
