import { Outlet } from "react-router-dom";
import OPACBooks from "../features/OPAC/Screens/OPACBooks";
import OPACComputers from "../features/OPAC/Screens/OPACComputers";
import OPACHome from "../features/OPAC/Screens/OPACHome";
import Layout from "../Pages/Layout";

const OPACRoutes = [
  {
    path: "OPAC",
    element: (
      <Layout NavbarType="OPAC">
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <OPACHome />,
      },
      {
        path: "Libros",
        element: <OPACBooks />,
      },
      {
        path: "Equipo-Computo",
        element: <OPACComputers />,
      },
    ],
  },
];

export default OPACRoutes;
