import { lazyWithRetry } from "../utils/lazyWithRetry";

export const UserMiddlePage = lazyWithRetry(() => import("../features/Users/Pages/UserMiddlePage"));
export const MyLoanHIstory = lazyWithRetry(() => import("../features/Loan/Components/UserLoans/MyLoanHIstory"));
export const UserEnrollmentCourses = lazyWithRetry(() => import("../features/Courses/screens/UserEnrollmentCourses"));
export const RoomsReservations = lazyWithRetry(() => import("../features/Loan/Components/UserLoans/RoomsReservationsTL"));
export const EditUser = lazyWithRetry(() => import("../features/Users/Pages/EditUser"));
