import { RouterProvider } from "react-router-dom";
import Routes from "./navigators/Routes";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./Context/dark";
function App() {
  return (
    <>
    <ThemeProvider>
      <Toaster />
      <RouterProvider router={Routes} />
    </ThemeProvider>
    </>
  );
}

export default App;
