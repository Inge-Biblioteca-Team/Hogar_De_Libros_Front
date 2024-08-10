import { createBrowserRouter, Outlet } from "react-router-dom";
import Landing from "../screens/Landing";
import Layout from "../Pages/Layout";
import BooksHomePage from "../features/Books/Pages/BooksHomePage"
import UniqueBook from "../features/Books/Pages/UniqueBook";
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
    path: "Sistema",
    element: (
      <Layout NavbarType="sistema">
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <BooksHomePage />,
      },
    ],
  },
  {
    path: "/book/:id",
    element: (
      <Layout NavbarType="sistema">
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <UniqueBook/>,
      },
    ],
  }
]);

export default Routes;
