import EditUser from "../features/Users/Pages/EditUser";
import MyLoanHIstory from "../features/Loan/Components/UserLoans/MyLoanHIstory";
import UserEnrollmentCourses from "../features/Courses/screens/UserEnrollmentCourses";
import RoomsReservations from "../features/Loan/Components/UserLoans/RoomsReservationsTL";

const UserRoutes = [
  {
    path: "Perfil",
    children: [
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
