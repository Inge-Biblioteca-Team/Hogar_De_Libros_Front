import { Outlet } from "react-router-dom";
import Layout from "../Pages/Layout";
import CreateRoom from "../features/Rooms/Components/MODALS/CreateRoms";

const RoomsRoutes = [
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
                        path: "Salas",
                        element: < CreateRoom />
                    }
                ]
            }
        ]
    }
];

export default RoomsRoutes;