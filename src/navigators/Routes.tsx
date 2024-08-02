import { createBrowserRouter, Outlet } from "react-router-dom";
import Landing from "../screens/Landing";
import Layout from "../Pages/Layout";
import BookCatalog from "../features/Books/Pages/BookCatalog";
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
        element: <BookCatalog />,
      },
    ],
  },
]);

export default Routes;
