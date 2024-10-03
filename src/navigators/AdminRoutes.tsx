import { Outlet } from "react-router-dom";
import AdminBooksInformation from "../features/Books/Pages/AdminBooksInformation";
import AdminCBooksInformation from "../features/Books/Pages/ChildrenBooks/AdminCBooksInformation";
import EditCBookInformation from "../features/Books/Pages/ChildrenBooks/EditCBookInformation";
import ManageChildrenBooks from "../features/Books/Pages/ChildrenBooks/ManageChildrenBooks";
import NewCBook from "../features/Books/Pages/ChildrenBooks/NewCBook";
import EditBookInformation from "../features/Books/Pages/EditBookInformation";
import ManageBooks from "../features/Books/Pages/ManageBooks";
import NewBook from "../features/Books/Pages/NewBook";
import AvailableComputers from "../features/Computers/components/AvailableComputers";
import ManagerComputer from "../features/Computers/Pages/ManagerComputer";
import NewAdminLoan from "../features/Loan/Components/BooksLoans/NewAdminLoan";
import ManageUsers from "../features/Users/Pages/ManageUsers";
import Layout from "../Pages/Layout";
import ManageLoansWS from "../features/Loan/Pages/WorkStations/ManageLoansWS";
import FinishedLoans from "../features/Loan/Pages/Books/FinishedLoans";
import InProgressLoans from "../features/Loan/Pages/Books/InProgressLoans";
import PendingRequest from "../features/Loan/Pages/Books/PendingRequest";
import WorkStationsLoanHistory from "../features/Loan/Pages/WorkStations/WorkStationsLoanHistory";
import ManageFurniture from "../features/Furniture/Pages/ManageFurniture";
import ManageEvents from "../features/EventsSection/Pages/ManageEvent";
import ManagePrograms from "../features/Programs/Pages/ManagePrograms";
import ManageRoom from "../features/Rooms/Pages/ManageRoom";


const adminRoutes = [
  {
    path: "HogarDeLibros/Gestion",
    element: (
        <Layout NavbarType="HogarDeLibros">
          <Outlet />
        </Layout>
      ),
    children: [
      {
        path: "Libros",
        children: [
          {
            index: true,
            element: <ManageBooks />,
          },
          {
            path: "NuevoLibro",
            element: <NewBook />,
          },
          {
            path: "Ver/:BookCode",
            element: <AdminBooksInformation />,
          },
          {
            path: "Editar/:BookCode",
            element: <EditBookInformation />,
          },
          {
            path: "Préstamos/:BookCode",
            element: <NewAdminLoan />,
          },
        ],
      },
      {
        path: "LibrosI",
        children: [
          {
            index: true,
            element: <ManageChildrenBooks />,
          },
          {
            path: "NuevoLibro",
            element: <NewCBook />,
          },
          {
            path: "Ver/:BookCode",
            element: <AdminCBooksInformation />,
          },
          {
            path: "Editar/:BookCode",
            element: <EditCBookInformation />,
          },
        ],
      },
      {
        path: "Equipos",
        children: [
          {
            index: true,
            element: <ManagerComputer />,
          },
          {
            path: "disponible",
            element: <AvailableComputers />,
          }
        ],
      },
      {
        path: "Usuarios",
        children: [
          {
            index: true,
            element: <ManageUsers />,
          },
        ],
      },
      {
        path: "Mobiliario",
        element: <ManageFurniture />,
      },
      {
        path: "Eventos",
        element: < ManageEvents />,
      },
      {
        path: "Programas",
        element: < ManagePrograms />,
      },
      {
        path: "Salas",
        element: < ManageRoom />,
      },
      {
        path: "Préstamos",
        children: [
          {
            index: true,
          },
          {
            path: "Pendientes",
            element: <PendingRequest />,
          },
          {
            path: "Finalizados",
            element: <FinishedLoans />,
          },
          {
            path: "EnProceso",
            element: <InProgressLoans />,
          },
          {
            path: "HistorialDeEquipos",
            element: <WorkStationsLoanHistory />,
          },
          {
            path: "Computadoras",
            element: <ManageLoansWS />,
          },
          {
            path: "Pendientes/Ver/:Code",
          }
        ],
      },
    ],
  },
];

export default adminRoutes;
