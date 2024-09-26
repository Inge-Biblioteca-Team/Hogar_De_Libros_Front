import { Outlet } from "react-router-dom";
import EditUser from "../components/Users/EditUser";
import Login from "../features/Users/Auth/Login";
import Register from "../features/Users/Auth/Register";
import Layout from "../Pages/Layout";
import Landing from "../screens/Landing";
import CourseInfo from "../features/Courses/components/Modals/CourseInfo";
import EditCourse from "../features/Courses/components/Modals/EditCourse";
import CreateCourse from "../features/Courses/components/Modals/CreateCourse";

const homeRoutes = [
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
    path: "IniciarSesion",
    element: <Login />,
  },
  {
    path: "Registro",
    element: <Register />,
  },
  {
    path: "EditUser",
    element: <EditUser />,
  },
  {
    path: "vista-curso",
    element: < CourseInfo />
  },
  {
    path: "editar-curso",
    element: < EditCourse />
  },
  {
    path: "añadir-curso",
    element: < CreateCourse />
  },
];

export default homeRoutes;
