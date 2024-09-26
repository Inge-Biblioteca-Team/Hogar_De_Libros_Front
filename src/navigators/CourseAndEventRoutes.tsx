import { Outlet } from "react-router-dom";
import Layout from "../Pages/Layout";
import CoruseSchedule from "../features/Courses/Pages/CoruseSchedule";
import EventsSchedule from "../features/EventsSection/Pages/EventsSchedule";

const CorusesAndEventRoutes = [
    {
      path: "HogarDeLibros",
      element: (
        <Layout NavbarType="HogarDeLibros">
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "ProximosCursos",
          children: [
            {
               index:true,
               element: <CoruseSchedule/> 
            },
            {
              path: "Curso/:Id",
           //   element: < />,
            },
            {
              path: "Matricula",
             // element: </>,
            },
            {
              path: "Infantiles",
             // element: <SearchChildrenCatalog />,
            },
          ],
        },
        {
          path:'ProximosEventos',
          children:[
            {
              index:true,
              element: <EventsSchedule/>
            }
          ]
        }
      ],
    },
  ];
  
  export default CorusesAndEventRoutes;