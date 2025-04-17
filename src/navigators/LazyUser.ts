import { lazy } from "react";

export const UserMiddlePage = lazy(() => import("../features/Users/Pages/UserMiddlePage"));
export const MyLoanHIstory = lazy(() => import("../features/Loan/Components/UserLoans/MyLoanHIstory"));
export const UserEnrollmentCourses = lazy(() => import("../features/Courses/screens/UserEnrollmentCourses"));
export const RoomsReservations = lazy(() => import("../features/Loan/Components/UserLoans/RoomsReservationsTL"));
export const EditUser = lazy(() => import("../features/Users/Pages/EditUser"));
