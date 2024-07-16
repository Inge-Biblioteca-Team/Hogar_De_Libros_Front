import { createBrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing";
import LandingHeader from "../components/Layout/LandingHeader";
import LandingFooter from "../components/Layout/LandingFooter";
import LandingHome from "../screens/LandingHome";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: [<LandingHeader />,<LandingHome/>,<Landing />,<LandingFooter/>],
    children: [
    
       //Aqui van todos los segmentos adminitrativos

    ],
  },
]);

export default Routes;
