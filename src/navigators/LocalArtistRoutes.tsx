import { Outlet } from "react-router-dom";
import Layout from "../Pages/Layout";
import ManageLocalArtist from "../features/LocalArtist/Pages/ManageLocalArtist";

const localArtistRoutes = [
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
                        path: "Artistas",
                        element: < ManageLocalArtist />
                    }
                ]
            }
        ]
    }
];

export default localArtistRoutes;