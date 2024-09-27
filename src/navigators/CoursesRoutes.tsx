import { Outlet } from "react-router-dom";
import Layout from "../Pages/Layout";
import ManageCourses from "../features/Courses/Pages/ManageCourses";

const coursesRoutes = [
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
                        path: "Cursos",
                        element: < ManageCourses />
                    },
                ]
            }
        ]
    }
];

export default coursesRoutes;