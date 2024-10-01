import { Outlet } from "react-router-dom";
import Layout from "../Pages/Layout";
import EventsSchedule from "../features/EventsSection/Pages/EventsSchedule";

const EventRoutes = [
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
                        path: "Eventos",
                        element: < EventsSchedule />
                    },
                ]
            }
        ]
    }
];

export default EventRoutes;