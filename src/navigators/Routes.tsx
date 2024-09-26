import { createBrowserRouter } from "react-router-dom";
import adminRoutes from "./AdminRoutes";
import bookRoutes from "./BookRoutes";
import homeRoutes from "./HomeRoutes";
import UserRoutes from "./UserRoutes";
import localArtistRoutes from "./LocalArtistRoutes";
import CorusesAndEventRoutes from "./CourseAndEventRoutes";


const Routes = createBrowserRouter([
  ...homeRoutes,
  ...bookRoutes,
  ...adminRoutes,
  ...UserRoutes,
  ...localArtistRoutes,
  ...CorusesAndEventRoutes
]);

export default Routes;
