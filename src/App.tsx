import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login";
import { isAuthenticated } from "./utils/app.utils";

// Auth Guard component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div>
      <Routes>
        {/**Public Routes */}
        <Route path="/login" element={<Login />} />

        {/** Protected Routes */}
        <Route path="/" element={<ProtectedRoute element={<DashBoard />} />} />
      </Routes>
    </div>
  );
};

export default App;
