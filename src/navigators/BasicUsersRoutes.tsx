import Colecction from "../features/Books/Screens/Colecction";
import AdvanceSearchColection from "../features/Books/Screens/AdvanceSearchColection";
import ChildrenColection from "../features/ChildrenBooks/Screens/ChildrenColection";
import EventsSchedule from "../features/EventsSection/Pages/EventsSchedule";
import CoruseSchedule from "../features/Courses/Pages/CoruseSchedule";
import AvailableComputers from "../features/Computers/screens/AvailableComputers";
import RoomsScheduleManage from "../features/Loan/Pages/Rooms/RoomsScheduleManage";
import CompletCatalog from "../features/Books/Screens/CompletCatalog";
import BooksMiddleScreen from "../features/Books/Screens/BooksMiddleScreen";
import ProgramActivities from "../features/Programs/screens/ProgramActivities";
import RoleBasedRoute from "./RolBaseRouter";
import { Outlet } from "react-router-dom";
import FriendInformation from "../features/Amiguitos/screens/FriendInformation";

const BasicUsersRoutes = [
  {
    path: "Catalogo",
    element: (
      <RoleBasedRoute>
        <Outlet />
      </RoleBasedRoute>
    ),
    children: [
      {
        index: true,
        element: <BooksMiddleScreen />,
      },
      {
        path: "Catalogo_Completo",
        element: <Colecction />,
      },
      {
        path: "Avanzado",
        element: <AdvanceSearchColection />,
      },
      {
        path: "Infantil",
        element: <ChildrenColection />,
      },
      {
        path: "Completo",
        element: <CompletCatalog />,
      },
    ],
  },
  {
    path: "Cronograma_Eventos",
    element: (
      <RoleBasedRoute>
        <EventsSchedule />,
      </RoleBasedRoute>
    ),
  },
  {
    path: "Cronograma_Cursos",
    element: (
      <RoleBasedRoute>
        <CoruseSchedule />,
      </RoleBasedRoute>
    ),
  },
  {
    path: "Cronograma_Actividades",
    element: (
      <RoleBasedRoute>
        <ProgramActivities />,
      </RoleBasedRoute>
    ),
  },
  {
    path: "Equipo_Disponible",
    element: (
      <RoleBasedRoute>
        <AvailableComputers />,
      </RoleBasedRoute>
    ),
  },
  {
    path: "Reserva_Salas",
    element: (
      <RoleBasedRoute roles={["institucional", "admin"]}>
        <RoomsScheduleManage />,
      </RoleBasedRoute>
    ),
  },
  {
    path: "AmigosYColaboradores",
    element: <FriendInformation />,
  },
];

export default BasicUsersRoutes;
