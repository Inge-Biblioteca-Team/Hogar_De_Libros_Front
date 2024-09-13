import { Outlet } from "react-router-dom";
import AdvancedSearch from "../features/Books/Pages/AdvancedSearch";
import BookInformation from "../features/Books/Pages/BookInformation";
import BookInformationChild from "../features/Books/Pages/ChildrenBooks/BookInformationChild";
import SearchChildrenCatalog from "../features/Books/Pages/ChildrenBooks/SearchChlindrenBook";
import SearchBookByName from "../features/Books/Pages/SearchBookByName";
import NewUsaerLoan from "../features/Loan/Components/BooksLoans/NewUserLoan";
import HomePage from "../Pages/HomePage";
import Layout from "../Pages/Layout";

const bookRoutes = [
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
        element: <BookInformationChild />,
      },
      {
        path: "Solicitud/:BookCode",
        element: <NewUsaerLoan />,
      },
    ],
  },
];

export default bookRoutes;
