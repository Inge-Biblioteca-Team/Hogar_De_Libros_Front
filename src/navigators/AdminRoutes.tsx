import { Outlet } from "react-router-dom";
import {
  CirculationAndLoanMiddlePage,
  ManageLoansWS,
  InProgressLoans,
  PendingRequest,
  ReservationList,
  AprovedReservationList,
  RoomsScheduleManage,
  AdviceManage,
  LoansMiddlePage,
  FinishedLoans,
  WorkStationsLoanHistory,
  OldReservationList,
  EventMiddlePage,
  ManageCourses,
  ManageEvents,
  ManagePrograms,
  ManageUsers,
  ResoursesMiddlePage,
  ManageLocalArtist,
  ManagerComputer,
  ManageFurniture,
  ManageRoom,
  ColabsMiddleScreen,
  ManageColabRequest,
  ManageAprovedColab,
  ManageColabHistory,
  DonationMiddleScreens,
  ManageRequestDonations,
  ManagePendingReceiveDon,
  ManageDonationsHistory,
  FriendMiddleScreen,
  ManageFriendsRequest,
  ManageFriends,
  Inbox,
} from "./LazyAdminViews";
import RoleBasedRoute from "./RolBaseRouter";
import ManageBooks from "../features/Books/Screens/ManageBooks";
import ManageChildrenBooks from "../features/ChildrenBooks/Screens/ManageChildrenBooks";
const AdminRoutes = [
  {
    path: "Prestamos_Circulacion",
    element: (
      <RoleBasedRoute roles={["admin", "asistente"]}>
        <Outlet />
      </RoleBasedRoute>
    ),
    children: [
      {
        index: true,
        element: <CirculationAndLoanMiddlePage />,
      },
      {
        path: "Catalogo_General",
        element: <ManageBooks loans />,
      },
      {
        path: "Catalogo_Infantil",
        element: <ManageChildrenBooks loans />,
      },
      {
        path: "Prestamo_Computo",
        element: <ManageLoansWS />,
      },
      {
        path: "Prestamos_Activos",
        element: <InProgressLoans />,
      },
      {
        path: "Solicitudes_Libros",
        element: <PendingRequest />,
      },
      {
        path: "Solicitudes_Salas",
        element: <ReservationList />,
      },
      {
        path: "Reserva_Aprovadas",
        element: <AprovedReservationList />,
      },
      {
        path: "Reservar_Sala",
        element: <RoomsScheduleManage />,
      },
    ],
  },
  {
    path: "Avisos",
    element: (
      <RoleBasedRoute roles={["admin","asistente"]}>
        <AdviceManage />
      </RoleBasedRoute>
    ),
  },
  {
    path: "Historial",
    element: (
      <RoleBasedRoute roles={["admin", "asistente"]}>
        <Outlet />
      </RoleBasedRoute>
    ),
    children: [
      {
        index: true,
        element: <LoansMiddlePage />,
      },
      {
        path: "Libros",
        element: <FinishedLoans />,
      },
      {
        path: "Equipo_Computo",
        element: <WorkStationsLoanHistory />,
      },
      {
        path: "Salas",
        element: <OldReservationList />,
      },
    ],
  },
  {
    path: "Servicios",
    element: (
      <RoleBasedRoute roles={["admin", "asistente"]}>
        <Outlet />
      </RoleBasedRoute>
    ),
    children: [
      {
        index: true,
        element: <EventMiddlePage />,
      },
      {
        path: "Cursos",
        element: <ManageCourses />,
      },
      {
        path: "Eventos",
        element: <ManageEvents />,
      },
      {
        path: "Programas",
        element: <ManagePrograms />,
      },
    ],
  },
  {
    path: "Gestion_Usuarios",
    element: (
      <RoleBasedRoute roles={["admin","asistente"]}>
        <ManageUsers />
      </RoleBasedRoute>
    ),
  },
  {
    path: "Recursos",
    element: (
      <RoleBasedRoute roles={["admin", "asistente"]}>
        <Outlet />
      </RoleBasedRoute>
    ),
    children: [
      {
        index: true,
        element: <ResoursesMiddlePage />,
      },
      {
        path: "Artistas",
        element: <ManageLocalArtist />,
      },
      {
        path: "Equipo_Computo",
        element: <ManagerComputer />,
      },
      {
        path: "Mobiliario",
        element: <ManageFurniture />,
      },
      {
        path: "Salas",
        element: <ManageRoom />,
      },
      {
        path: "Catalogo_General",
        element: <ManageBooks />,
      },
      {
        path: "Catalogo_Infantil",
        element: <ManageChildrenBooks />,
      },
    ],
  },
  {
    path: "Colaboraciones",
    element: (
      <RoleBasedRoute roles={["admin", "asistente"]}>
        <Outlet />
      </RoleBasedRoute>
    ),
    children: [
      {
        index: true,
        element: <ColabsMiddleScreen />,
      },
      {
        path: "Pendientes_Respuesta",
        element: <ManageColabRequest />,
      },
      {
        path: "Pendientes_Realizacion",
        element: <ManageAprovedColab />,
      },
      {
        path: "Historial",
        element: <ManageColabHistory />,
      },
    ],
  },
  {
    path: "Donaciones",
    element: (
      <RoleBasedRoute roles={["admin", "asistente"]}>
        <Outlet />
      </RoleBasedRoute>
    ),
    children: [
      {
        index: true,
        element: <DonationMiddleScreens />,
      },
      {
        path: "Pendientes_Respuesta",
        element: <ManageRequestDonations />,
      },
      {
        path: "Pendiente_Recepcion",
        element: <ManagePendingReceiveDon />,
      },
      {
        path: "Historial",
        element: <ManageDonationsHistory />,
      },
    ],
  },
  {
    path: "Amigos",
    element: (
      <RoleBasedRoute roles={["admin", "asistente"]}>
        <Outlet />
      </RoleBasedRoute>
    ),
    children: [
      {
        index: true,
        element: <FriendMiddleScreen />,
      },
      {
        path: "Pendiente_Respuesta",
        element: <ManageFriendsRequest />,
      },
      {
        path: "Lista_Amigos",
        element: <ManageFriends />,
      },
    ],
  },
  {
    path: "Mensajeria",
    element: (
      <RoleBasedRoute roles={["admin","asistente"]}>
        <Inbox />
      </RoleBasedRoute>
    ),
  },
];

export default AdminRoutes;
