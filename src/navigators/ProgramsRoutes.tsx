import { Outlet } from "react-router-dom";
import Layout from "../Pages/Layout";
import AvailablePrograms from "../features/Programs/Pages/AvailablePrograms";

const ProgramsRoutes = [
  {
    path: "HogarDeLibros",
    element: (
      <Layout NavbarType="HogarDeLibros">
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "Programas",
        element:<AvailablePrograms/>,
      },
    ],
  },
];

export default ProgramsRoutes;
