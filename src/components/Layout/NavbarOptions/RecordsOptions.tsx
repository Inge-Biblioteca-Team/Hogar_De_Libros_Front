import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import SidebarContext from "../../../Context/NavBarContext/NavbarContext";

const RecordsOptions = () => {
  const { handleNavigation } = useContext(SidebarContext);
  return (
    <>
      <Sidebar.Collapse label="Historial de préstamos" id="loanHistory">
        <Sidebar.Item
          onClick={() => handleNavigation("/HogarDeLibros/Historial/Libros")}
        >
          Libros
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() =>
            handleNavigation("/HogarDeLibros/Historial/Equipo_Computo")
          }
        >
          Equipo de cómputo
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() => handleNavigation("/HogarDeLibros/Historial/Salas")}
        >
          Salas
        </Sidebar.Item>
      </Sidebar.Collapse>
    </>
  );
};

export default RecordsOptions;
