import { lazy } from "react";

export const Login = lazy(() => import("../features/Users/Auth/Login"));
export const Register = lazy(() => import("../features/Users/Auth/Register"));
export const ChangePassword = lazy(() => import("../features/Users/Components/ChangePassword"));
