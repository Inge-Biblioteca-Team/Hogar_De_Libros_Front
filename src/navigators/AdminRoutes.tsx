import ManageChildrenBooks from "../features/ChildrenBooks/Screens/ManageChildrenBooks";
import ManagerComputer from "../features/Computers/Pages/ManagerComputer";
import ManageUsers from "../features/Users/Pages/ManageUsers";
import ManageLoansWS from "../features/Loan/Pages/WorkStations/ManageLoansWS";
import FinishedLoans from "../features/Loan/Pages/Books/FinishedLoans";
import InProgressLoans from "../features/Loan/Pages/Books/InProgressLoans";
import PendingRequest from "../features/Loan/Pages/Books/PendingRequest";
import WorkStationsLoanHistory from "../features/Loan/Pages/WorkStations/WorkStationsLoanHistory";
import ManageFurniture from "../features/Furniture/Pages/ManageFurniture";
import ManageEvents from "../features/EventsSection/Pages/ManageEvent";
import ManagePrograms from "../features/Programs/Pages/ManagePrograms";
import ReservationList from "../features/Loan/Pages/Rooms/ReservationList";
import OldReservationList from "../features/Loan/Pages/Rooms/OldReservationList";
import AprovedReservationList from "../features/Loan/Pages/Rooms/AprovedReservationList";
import ManageRoom from "../features/Rooms/Pages/ManageRoom";
import ManageBooks from "../features/Books/Screens/ManageBooks";
import ManageCourses from "../features/Courses/Pages/ManageCourses";
import ManageLocalArtist from "../features/LocalArtist/Pages/ManageLocalArtist";
import AdviceManage from "../features/Advice/Screens/AdviceManage";
import RoomsScheduleManage from "../features/Loan/Pages/Rooms/RoomsScheduleManage";
import ManageColabRequest from "../features/Collaborators/Screens/ManageColabRequest";
import ManageAprovedColab from "../features/Collaborators/Screens/ManageAprovedColab";
import ManageColabHistory from "../features/Collaborators/Screens/ManageColabHistory";
import ManageFriendsRequest from "../features/Amiguitos/screens/ManageFriendsRequest";
import ManageFriends from "../features/Amiguitos/screens/ManageFriends";
import ManageRequestDonations from "../features/Donations/Screens/ManageRequestDonations";
import ManagePendingReceiveDon from "../features/Donations/Screens/ManagePendingReceiveDon";
import ManageDonationsHistory from "../features/Donations/Screens/ManageDonationsHistory";
import Inbox from "../features/Inbox/Page/Inbox";
const AdminRoutes = [
  {
    path: "Prestamos_Circulacion",
    children: [
      {
        index:true,

      },
      {
        path: "Catalogo_General",
        element: <ManageBooks />,
      },
      {
        path: "Catalogo_Infantil",
        element: <ManageChildrenBooks />,
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
    element: <AdviceManage />,
  },
  {
    path: "Historial",
    children: [
      {
        index:true,

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
    children: [
      {
        index:true,

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
    element: <ManageUsers />,
  },
  {
    path: "Recursos",
    children: [
      {
        index:true,

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
    children: [
      {
        index:true,

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
    children: [
      {
        index:true,

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
    children: [
      {
        index:true,

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
    element:<Inbox/>
  },
];

export default AdminRoutes;
