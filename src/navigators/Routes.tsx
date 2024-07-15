import { createBrowserRouter } from "react-router-dom";
import Landing from "../screens/Landing";
import LandingHeader from "../components/Layout/LandingHeader";
import LandingFooter from "../components/Layout/LandingFooter";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: [<LandingHeader />,,<Landing />,<LandingFooter/>],
    children: [
    
       //Aqui van todos los segmentos adminitrativos

    ],
  },
]);

export default Routes;
