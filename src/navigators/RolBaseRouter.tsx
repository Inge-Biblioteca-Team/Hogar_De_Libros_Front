import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../Context/UserContext/UserContext";

type RoleBasedRouteProps = {
  roles?: string[];
  children: React.ReactNode;
};

const RoleBasedRoute = ({ roles, children }: RoleBasedRouteProps) => {
  const { isLogged, currentUser } = useContext(UserContext);

  const role = currentUser?.role || "admin";

  if (!isLogged) {
    return <Navigate to="/IniciarSesion" />;
  }

  if (roles && isLogged && !roles?.includes(role)) {
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
};

export default RoleBasedRoute;
