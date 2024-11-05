import { RouterProvider } from "react-router-dom";
import Routes from "./navigators/Routes";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
