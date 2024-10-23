import { Outlet } from "react-router-dom";
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
          
        ],
      },
      {
        path: "CatalogoDeLibros/Libro/:BookCode",
       
      },

      {
        path: "Solicitud/:BookCode",

      },
    ],
  },
];

export default bookRoutes;
