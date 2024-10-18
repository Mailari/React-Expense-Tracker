import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import DashBoard from "./components/DashBoard";
import NotFoundPage from "./pages/NotFound.page";
import SettingsPage from "./pages/settings.page";
import Login from "./pages/Login.page";
import MainLayout from "./components/Layouts/MainLayout";
import { isAuthenticated } from "./utils/app.utils";
import { Suspense } from "react";
import Accounts from "./pages/Accounts.page";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated() ? children : <Navigate to="login" />;
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <DashBoard /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "account", element: <Accounts /> },
    ],
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

const router = createBrowserRouter(routes, { basename: "/" });

const App = () => {
  return (
    <Suspense fallback={<>...isLoading</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
