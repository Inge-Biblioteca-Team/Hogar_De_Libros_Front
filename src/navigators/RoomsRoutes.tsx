import { Outlet } from "react-router-dom";
import Layout from "../Pages/Layout";
import ManageRoom from "../features/Rooms/Pages/ManageRoom";

const RoomsRoutes = [
  {
    path: "HogarDeLibros",
    element: (
      <Layout NavbarType="HogarDeLibros">
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "Gestion",
        children: [
          {
            path: "Salas",
            element: <ManageRoom />,
          },
        ],
      },
    ],
  },
];

export default RoomsRoutes;
