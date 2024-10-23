import { createBrowserRouter, Outlet } from "react-router-dom";
import BasicUsersRoutes from "./BasicUsersRoutes";
import Layout from "../Pages/Layout";
import Landing from "../screens/Landing";
import AuthRoutes from "./AuhtRoutes";
import AdminRoutes from "./AdminRoutes";

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
      <Layout NavbarType="HogarDeLibros">
        <Outlet />
      </Layout>
    ),
    children: [...BasicUsersRoutes, ...AdminRoutes],
  },
]);

export default Routes;
