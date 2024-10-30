import Login from "../features/Users/Auth/Login";
import Register from "../features/Users/Auth/Register";
import ChangePassword from "../features/Users/Components/ChangePassword";
import EditUser from "../features/Users/Pages/EditUser";

const AuthRoutes = [
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
    path: "reset-password",
    element: <ChangePassword />,
  },
];

export default AuthRoutes;
