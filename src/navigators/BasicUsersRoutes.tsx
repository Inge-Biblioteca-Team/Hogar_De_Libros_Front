import Colecction from "../features/Books/Screens/Colecction";
import AdvanceSearchColection from "../features/Books/Screens/AdvanceSearchColection";
import ChildrenColection from "../features/ChildrenBooks/Screens/ChildrenColection";
import EventsSchedule from "../features/EventsSection/Pages/EventsSchedule";
import CoruseSchedule from "../features/Courses/Pages/CoruseSchedule";
import AvailableComputers from "../features/Computers/screens/AvailableComputers";
import RoomsScheduleManage from "../features/Loan/Pages/Rooms/RoomsScheduleManage";
import CompletCatalog from "../features/Books/Screens/CompletCatalog";

const BasicUsersRoutes = [
  {
    path: "Catalogo",
    children: [
      {
        index:true,

      },
      {
        index: true,
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
    element: <EventsSchedule />,
  },
  {
    path: "Cronograma_Cursos",
    element: <CoruseSchedule />,
  },
  {
    path: "Equipo_Disponible",
    element: <AvailableComputers />,
  },
  {
    path: "Reserva_Salas",
    element: <RoomsScheduleManage />,
  },
];

export default BasicUsersRoutes;
