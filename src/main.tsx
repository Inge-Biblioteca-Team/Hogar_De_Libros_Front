import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
import UserProvider from "./Context/UserContext/UserProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <App />
    </QueryClientProvider>
  </UserProvider>
);
