import { createBrowserRouter, Outlet } from "react-router-dom";
import BasicUsersRoutes from "./BasicUsersRoutes";
import Layout from "../Pages/Layout";
import Landing from "../screens/Landing";
import AuthRoutes from "./AuhtRoutes";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import RoleBasedRoute from "./RolBaseRouter";
import HomePage from "../Pages/HomePage";
import NotFound from "../Pages/NotFound";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Routes = createBrowserRouter([
  {
    index: true,
    element: (
      <Layout NavbarType="Landing">
        <Landing />
      </Layout>
    ),
  },

  ...AuthRoutes,
  {
    path: "HogarDeLibros",
    element: (
      <RoleBasedRoute>
        <Layout NavbarType="HogarDeLibros">
          <Suspense
            fallback={
              <div className="w-full flex items-center justify-center">
                <Loader />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </Layout>
      </RoleBasedRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      ...BasicUsersRoutes,
      ...AdminRoutes,
      ...UserRoutes,
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
