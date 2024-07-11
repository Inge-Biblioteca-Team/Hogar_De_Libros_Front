import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Donaciones from "../Amiguitos_de_la_biblioteca/Donaciones/Pages/Donaciones";
import Colaboraciones from "../Amiguitos_de_la_biblioteca/Colaboraciones/Pages/Colaboraciones";
import Card_Container_Programas_Actividades from "../Amiguitos_de_la_biblioteca/Voluntariado/Components/Card_Container_Programas_Actividades";
import Salas from "../Salas/Pages/Salas";

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
        <Route path="/salas" element={<Salas/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
