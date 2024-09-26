import { Outlet } from "react-router-dom";
import EditUser from "../features/Users/Pages/EditUser";
import MyLoanHIstory from "../features/Loan/Components/UserLoans/MyLoanHIstory";
import Layout from "../Pages/Layout";
import NewUsaerLoan from "../features/Loan/Components/BooksLoans/NewUserLoan";
import ChangePassword from "../features/Users/Components/ChangePassword";
import UserEnrollmentCourses from "../features/Courses/screens/UserEnrollmentCourses";

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
            element: <UserEnrollmentCourses/>
          }
        ],
      },
      {
        path: "Solicitud",
        children: [
          {
            path: ":BookCode",
            element: <NewUsaerLoan />,
          },
        ],
      },
    ],
  },
  {
    path:"reset-password",
    element: <ChangePassword/>
  }
];

export default UserRoutes;
