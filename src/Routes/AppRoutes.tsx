import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Card_Container_Volunteering from "../Features/Amiguitos_de_la_biblioteca/Voluntariado/Components/Card_Container_Volunteering";
import Rooms from "../Features/Salas/Pages/Rooms";
import Donations from "../Features/Amiguitos_de_la_biblioteca/Donaciones/Pages/Donations";
import Collaborations from "../Features/Amiguitos_de_la_biblioteca/Colaboraciones/Pages/Collaborations";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/Volunteering"
          element={<Card_Container_Volunteering />}
        />
        <Route path="/Donations" element={<Donations />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/Rooms" element={<Rooms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

//La galeria de rutas se tiene intencion de usar la version de un browser Router
//ejemplo
/*createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: ({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          }),
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
            loader: redirectIfUser,
          },
          {
            path: "logout",
            action: logoutUser,
          },
        ],
      },
    ],
  },
]);*/