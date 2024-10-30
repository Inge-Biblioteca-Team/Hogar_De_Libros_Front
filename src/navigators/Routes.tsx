import { createBrowserRouter, Outlet } from "react-router-dom";
import BasicUsersRoutes from "./BasicUsersRoutes";
import Layout from "../Pages/Layout";
import Landing from "../screens/Landing";
import AuthRoutes from "./AuhtRoutes";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";

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
    children: [
      {
        index: true,
       
      },
      ...BasicUsersRoutes, ...AdminRoutes,...UserRoutes
    ],
  },
]);

export default Routes;