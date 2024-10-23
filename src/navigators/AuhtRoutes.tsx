import Login from "../features/Users/Auth/Login";
import Register from "../features/Users/Auth/Register";
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
  ];
  
  export default AuthRoutes;
  