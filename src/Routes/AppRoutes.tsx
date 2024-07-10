import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Card_Container_Programas_Actividades from "../Amiguitos_de_la_biblioteca/Components/Card_Container_Programas_Actividades";
import Donaciones from "../Amiguitos_de_la_biblioteca/Pages/Donaciones";
import Colaboraciones from "../Amiguitos_de_la_biblioteca/Pages/Colaboraciones";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/Programas&Actividades"
          element={<Card_Container_Programas_Actividades />}
        />
        <Route path="/Donaciones" element={<Donaciones />} />
        <Route path="/Colaboraciones" element={<Colaboraciones />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
