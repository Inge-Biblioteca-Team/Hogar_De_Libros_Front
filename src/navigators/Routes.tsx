import { createBrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing";
import LandingFooter from "../components/Layout/LandingFooter";
import LandingHome from "../screens/LandingHome";
import LandingNavbar from "../components/Layout/LandingNavbar";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: [<LandingNavbar />,<LandingHome/>,<Landing />,<LandingFooter/>],
    children: [
    
       //Aqui van todos los segmentos adminitrativos

    ],
  },
]);

export default Routes;
