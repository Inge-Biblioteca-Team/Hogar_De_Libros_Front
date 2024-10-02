import { Outlet } from "react-router-dom";
import Layout from "../Pages/Layout";
import ManageRooms from "../features/Rooms/Pages/ManageRooms";

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
                        element: < ManageRooms />
                    }
                ]
            }
        ]
    }
];

export default RoomsRoutes;