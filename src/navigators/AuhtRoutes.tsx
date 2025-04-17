import { Login, Register, ChangePassword } from "./AuthLazy";
import { EditUser } from "./LazyUser";


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
