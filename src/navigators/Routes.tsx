import { createBrowserRouter } from "react-router-dom";
import adminRoutes from "./AdminRoutes";
import bookRoutes from "./BookRoutes";
import homeRoutes from "./HomeRoutes";
import UserRoutes from "./UserRoutes";


const Routes = createBrowserRouter([
  ...homeRoutes,
  ...bookRoutes,
  ...adminRoutes,
  ...UserRoutes,
]);

export default Routes;
