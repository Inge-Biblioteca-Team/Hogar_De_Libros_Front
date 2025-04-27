import { lazyWithRetry } from "../utils/lazyWithRetry";

export const Login = lazyWithRetry(() => import("../features/Users/Auth/Login"));
export const Register = lazyWithRetry(() => import("../features/Users/Auth/Register"));
export const ChangePassword = lazyWithRetry(() => import("../features/Users/Components/ChangePassword"));
