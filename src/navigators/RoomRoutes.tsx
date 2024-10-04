import { Outlet } from "react-router-dom";
import Layout from "../Pages/Layout";
import RoomsScheduleManage from "../features/Loan/Pages/Rooms/RoomsScheduleManage";

const RoomRoutes = [
  {
    path: "HogarDeLibros",
    element: (
      <Layout NavbarType="HogarDeLibros">
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "Salas",
        children: [
          {
            path: "Disponibilidad",
            element: <RoomsScheduleManage />,
          },
        ],
      },
    ],
  },
];

export default RoomRoutes;
