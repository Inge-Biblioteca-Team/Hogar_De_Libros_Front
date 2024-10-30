import EditUser from "../features/Users/Pages/EditUser";
import MyLoanHIstory from "../features/Loan/Components/UserLoans/MyLoanHIstory";
import UserEnrollmentCourses from "../features/Courses/screens/UserEnrollmentCourses";
import RoomsReservations from "../features/Loan/Components/UserLoans/RoomsReservationsTL";
import UserMiddlePage from "../features/Users/Pages/UserMiddlePage";

const UserRoutes = [
  {
    path: "Perfil",
    children: [
      {
        index: true,
        element: <UserMiddlePage />,
      },
      {
        path: "MisPréstamos",
        element: <MyLoanHIstory />,
      },
      {
        path: "EditarPerfil",
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
];

export default UserRoutes;
