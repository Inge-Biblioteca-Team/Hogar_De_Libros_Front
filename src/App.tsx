import { RouterProvider } from "react-router-dom";
import Routes from "./navigators/Routes";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./Context/dark";
import { Suspense } from "react";
function App() {
  return (
    <>
    <ThemeProvider>
      <Toaster />
      <Suspense fallback={<div className="p-4 text-center">Cargando vista...</div>}>
        <RouterProvider router={Routes} />
      </Suspense>
    </ThemeProvider>
    </>
  );
}

export default App;
