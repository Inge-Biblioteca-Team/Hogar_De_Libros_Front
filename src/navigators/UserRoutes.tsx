import { Outlet } from "react-router-dom";
import EditUser from "../components/Users/EditUser";
import MyLoanHIstory from "../features/Loan/Components/UserLoans/MyLoanHIstory";
import Layout from "../Pages/Layout";
import NewUsaerLoan from "../features/Loan/Components/BooksLoans/NewUserLoan";

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
            path: "MisPrestamos",
            element: <MyLoanHIstory />,
          },
          {
            path: "EditarPerfil",
            element: <EditUser />,
          },
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
];

export default UserRoutes;
