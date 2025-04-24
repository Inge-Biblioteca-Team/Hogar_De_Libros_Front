import { Suspense } from "react";
import { Login, Register, ChangePassword } from "./AuthLazy";
import { EditUser } from "./LazyUser";
import Loader from "../components/Loader";

const AuthRoutes = [
  {
    path: "IniciarSesion",

    element: (
      <Suspense
        fallback={
          <div className="w-full flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <Login />
      </Suspense>
    ),
  },
  {
    path: "Registro",
    element: (
      <Suspense
        fallback={
          <div className="w-full flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <Register />
      </Suspense>
    ),
  },
  {
    path: "EditUser",
    element: (
      <Suspense
        fallback={
          <div className="w-full flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <EditUser />
      </Suspense>
    ),
  },
  {
    path: "reset-password",
    element: (
      <Suspense
        fallback={
          <div className="w-full flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <ChangePassword />
      </Suspense>
    ),
  },
];

export default AuthRoutes;
