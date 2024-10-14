import { Outlet } from "react-router-dom";
import Layout from "../Pages/Layout";
import AdviceTable from "../features/Advice/Screens/AdviceManage";

const AdviceRoutes = [
  {
    path: "HogarDeLibros",
    element: (
      <Layout NavbarType="HogarDeLibros">
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "Gestion",
        children: [
          {
            path: "Avisos",
            element: <AdviceTable />,
          },
        ],
      },
    ],
  },
];

export default AdviceRoutes;
