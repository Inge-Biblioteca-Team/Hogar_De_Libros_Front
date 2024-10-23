import { Outlet } from "react-router-dom";
import EditUser from "../features/Users/Pages/EditUser";
import MyLoanHIstory from "../features/Loan/Components/UserLoans/MyLoanHIstory";
import Layout from "../Pages/Layout";
import ChangePassword from "../features/Users/Components/ChangePassword";
import UserEnrollmentCourses from "../features/Courses/screens/UserEnrollmentCourses";
import RoomsReservations from "../features/Loan/Components/UserLoans/RoomsReservationsTL";

const UserRoutes = [
  {
    path: "HogarDeLibros",
    element: (
      <Layout NavbarType="HogarDeLibros">
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "Perfil",
        children: [
          {
            path: "MisPréstamos",
            element: <MyLoanHIstory />,
          },
          {
            path: "EditarPerfil/:Cedula",
            element: <EditUser />,
          },
          {
            path: "CursosMatriculados",
            element: <UserEnrollmentCourses />,
          },
          {
            path: "MisReservaciones",
            element: <RoomsReservations />,
          },
        ],
      },
      {
        path: "Solicitud",
        children: [
          {
            path: ":BookCode",
          },
        ],
      },
    ],
  },
  {
    path: "reset-password",
    element: <ChangePassword />,
  },
];

export default UserRoutes;
