import { RouterProvider } from "react-router-dom";
import Routes from "./navigators/Routes";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./Context/dark";
import { Suspense } from "react";
import Loader from "./components/Loader";
function App() {
  return (
    <>
      <ThemeProvider>
        <Toaster />
        <Suspense
          fallback={
            <div className="w-full flex items-center justify-center">
              <Loader />
            </div>
          }
        >
          <RouterProvider router={Routes} />
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
