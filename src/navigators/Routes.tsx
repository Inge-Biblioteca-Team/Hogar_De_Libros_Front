import { createBrowserRouter, Outlet } from "react-router-dom";
import Landing from "../screens/Landing";
import Layout from "../Pages/Layout";
import BooksHomePage from "../features/Books/Pages/BooksHomePage";
import SearchBookByName from "../features/Books/Pages/SearchBookByName";
import BookInformation from "../features/Books/Pages/BookInformation";
import ManagerComputer from "../features/Computers/Pages/ManagerComputer";
import ComputerNew from "../features/Computers/Pages/ComputerNew";
import EditComputer from "../features/Computers/Pages/EditComputer";
import AdvancedSearch from "../features/Books/components/AdvancedSearch";
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
        element: <BooksHomePage />,
      },
      {
        path:"Busqueda/Titulo",
        element:<SearchBookByName/>
      },
      {
        path: "Busqueda/Avanzada",
        element:<AdvancedSearch/>
      },
      {
        path:"CatalogoDeLibros/Libro/:id",
        element:<BookInformation />
      },
      {
        path: "Gestion/EquipodeComputo",
        element:<ManagerComputer/>
      },
      {
        path: "Gestion/EquipodeComputo/AñadirEquipo",
        element:<ComputerNew/>
      },
      {
        path: "Gestion/EquipodeComputo/EditarComputadora",
        element:<EditComputer/>
      }
    ],
  },

]);

export default Routes;
