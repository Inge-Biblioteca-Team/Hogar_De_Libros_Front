
import { Outlet } from "react-router-dom";
import { UserMiddlePage, MyLoanHIstory, EditUser, UserEnrollmentCourses, RoomsReservations } from "./LazyUser";
import RoleBasedRoute from "./RolBaseRouter";

const UserRoutes = [
  {
    path: "Perfil",
    element:(
      <RoleBasedRoute >
        <Outlet />
      </RoleBasedRoute>
    ),
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
