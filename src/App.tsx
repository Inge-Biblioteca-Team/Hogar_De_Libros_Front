import { RouterProvider } from "react-router-dom";
import Routes from "./navigators/Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={Routes} />
      </QueryClientProvider>
    </>
  );
}

export default App;
