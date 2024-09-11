import { createBrowserRouter, Outlet } from "react-router-dom";
import Landing from "../screens/Landing";
import Layout from "../Pages/Layout";
import HomePage from "../Pages/HomePage";
import SearchBookByName from "../features/Books/Pages/SearchBookByName";
import BookInformation from "../features/Books/Pages/BookInformation";
import ManageBooks from "../features/Books/Pages/ManageBooks";
import NewBook from "../features/Books/Pages/NewBook";
import AdminBooksInformation from "../features/Books/Pages/AdminBooksInformation";
import EditBookInformation from "../features/Books/Pages/EditBookInformation";
import ManagerComputer from "../features/Computers/Pages/ManagerComputer";
import EditComputer from "../features/Computers/Pages/EditComputer";
import AdvancedSearch from "../features/Books/Pages/AdvancedSearch";
import AdminComputerInformation from "../features/Computers/Pages/AdminComputer";
import ComputerNew from "../features/Computers/Pages/ComputerNew";
import AvailableComputers from "../features/Computers/components/AvailableComputers";
import ManageChildrenBooks from "../features/Books/Pages/ChildrenBooks/ManageChildrenBooks";
import NewCBook from "../features/Books/Pages/ChildrenBooks/NewCBook";
import AdminCBooksInformation from "../features/Books/Pages/ChildrenBooks/AdminCBooksInformation";
import EditCBookInformation from "../features/Books/Pages/ChildrenBooks/EditCBookInformation";
import SearchChildrenCatalog from "../features/Books/Pages/ChildrenBooks/SearchChlindrenBook";
import BookInformationChild from "../features/Books/Pages/ChildrenBooks/BookInformationChild";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import EditUser from "../components/Users/EditUser";
import EditUserAdmin from "../features/Users/EditUserAdmin";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout NavbarType="Landing">
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
  {
    path: "EditUser",
    element: < EditUser/>,
  },
  {
    path: "LogIn",
    element: < Login/>,
  },
  {
    path: "register",
    element: < Register/>
  },
  {
    path: "HogarDeLibros",
    element: (
      <Layout NavbarType="HogarDeLibros">
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "Busqueda",
        children: [
          {
            path: "Titulo",
            element: <SearchBookByName />,
          },
          {
            path: "Avanzada",
            element: <AdvancedSearch />,
          },
          {
            path: "Infantiles",
            element: <SearchChildrenCatalog />,
          },

        ],
      },
      {
        path: "CatalogoDeLibros/Libro/:BookCode",
        element: <BookInformation />,
      },
      {
        path: "CatalogoDeLibros/LibroI/:BookCode",
        element: <BookInformationChild/>,
      },
      {
        path: "Gestion",
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
              },
              {
                path: "NuevoEquipo",
                element: <ComputerNew />,
              },
              {
                path: "Editar/:Code",
                element: <EditComputer />,
              },
              {
                path: "Ver/:Code",
                element: <AdminComputerInformation />,
              },
            ],
          },
          {
            path: "Usuarios",
            element: < EditUserAdmin/>,
            children: [
              {
                index: true,
              },
              {
                path: "Nuevo",
              },
              {
                path: "Editar/:Code",
              },
              {
                path: "Ver/:Code",
              },
              {
                path: "User",
              },

   
      ],
          },
          {
            path: "Salas",
            children: [
              {
                index: true,
              },
              {
                path: "Nueva",
              },
              {
                path: "Editar/:Code",
              },
              {
                path: "Ver/:Code",
              },
            ],
          },
          {
            path: "Artistas",
            children: [
              {
                index: true,
              },
              {
                path: "Nuevo",
              },
              {
                path: "Editar/:Code",
              },
              {
                path: "Ver/:Code",
              },
            ],
          },
          {
            path: "Mobiliario",
            children: [
              {
                index: true,
              },
              {
                path: "Nuevo",
              },
              {
                path: "Editar/:Code",
              },
              {
                path: "Ver/:Code",
              },
            ],
          },
          {
            path: "Programas",
            children: [
              {
                index: true,
              },
              {
                path: "Nuevo",
              },
              {
                path: "Editar/:Code",
              },
              {
                path: "Ver/:Code",
              },
            ],
          },
          {
            path: "Eventos",
            children: [
              {
                index: true,
              },
              {
                path: "Nuevo",
              },
              {
                path: "Editar/:Code",
              },
              {
                path: "Ver/:Code",
              },
            ],
          },
          {
            path: "Cursos",
            children: [
              {
                index: true,
              },
              {
                path: "Nuevo",
              },
              {
                path: "Editar/:Code",
              },
              {
                path: "Ver/:Code",
              },
            ],
          },
          {
            path: "Amigos",
            children: [
              {
                index: true,
              },
              {
                path: "Nuevo",
              },
              {
                path: "Editar/:Code",
              },
              {
                path: "Ver/:Code",
              },
            ],
          },
          {
            path: "Prestamos",
            children: [
              {
                index: true,
              },
              {
                path: "Pendientes",
               //   element:<PendingRequest/>
              },
              {
                path: "Finalizados",
                //  element: <FinishedLoans/>
              },
              {
                path: "EnProceso",
               //   element:<InProgressLoans/>
              },
              {
                path: "Pendientes/Ver/:Code",
              },
              {
                path: "SolicitarLibro/:Objetive",
              //  element: <BookLoan/>
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default Routes;
