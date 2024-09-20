import { createBrowserRouter } from "react-router-dom";
import adminRoutes from "./AdminRoutes";
import bookRoutes from "./BookRoutes";
import homeRoutes from "./HomeRoutes";
import UserRoutes from "./UserRoutes";
import localArtistRoutes from "./LocalArtistRoutes";


const Routes = createBrowserRouter([
  ...homeRoutes,
  ...bookRoutes,
  ...adminRoutes,
  ...UserRoutes,
  ...localArtistRoutes,
]);

export default Routes;
