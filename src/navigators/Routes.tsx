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
        ],
      },
      {
        path: "CatalogoDeLibros/Libro/:BookCode",
        element: <BookInformation />,
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
            path: "Equipos",
            children: [
              {
                index: true,
                element: <ManagerComputer />,
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
               
              },
              {
                path: "Finalizados",
                
              },
              {
                path: "EnProceso",
             
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default Routes;
