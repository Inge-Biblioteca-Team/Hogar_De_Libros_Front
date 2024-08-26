import { createBrowserRouter, Outlet } from "react-router-dom";
import Landing from "../screens/Landing";
import Layout from "../Pages/Layout";
import BooksHomePage from "../features/Books/Pages/BooksHomePage";
import SearchBookByName from "../features/Books/Pages/SearchBookByName";
import BookInformation from "../features/Books/Pages/BookInformation";
import ManageBooks from "../features/Books/Pages/ManageBooks";
import NewBook from "../features/Books/Pages/NewBook";
import AdminBooksInformation from "../features/Books/Pages/AdminBooksInformation";
import EditBookInformation from "../features/Books/Pages/EditBookInformation";
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
        path: "Busqueda/Titulo",
        element: <SearchBookByName />,
      },
      {
        path: "CatalogoDeLibros/Libro/:id",
        element: <BookInformation />,
      },
      {
        path: "Gestion/Libros",
        element: <ManageBooks />,
      },
      {
        path: "Gestion/Libros/CrearLibro",
        element:<NewBook/>
      },
      {
        path:"Gestion/Libros/:id",
        element:<AdminBooksInformation/>
      },
      {
        path:"Gestion/Libros/Editar/:id",
        element:<EditBookInformation/>
      }
      

    ],
  },
]);

export default Routes;
