import { RouterProvider } from "react-router-dom";
import Routes from "./navigators/Routes";
function App() {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
