import { Outlet } from "react-router-dom";
import {
  BooksMiddleScreen,
  Colecction,
  AdvanceSearchColection,
  ChildrenColection,
  CompletCatalog,
  EventsSchedule,
  CoruseSchedule,
  ProgramActivities,
  AvailableComputers,
  FriendInformation,
} from "./BasicUserLazy";
import { RoomsScheduleManage } from "./LazyAdminViews";
import RoleBasedRoute from "./RolBaseRouter";

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
