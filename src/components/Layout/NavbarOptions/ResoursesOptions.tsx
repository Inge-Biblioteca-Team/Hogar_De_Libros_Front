import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import SidebarContext from "../../../Context/NavBarContext/NavbarContext";

const ResoursesOptions = () => {
  const { handleNavigation } = useContext(SidebarContext);
  return (
    <>
      <Sidebar.Collapse label="Recursos" id="Resources">
        <Sidebar.Item
          onClick={() => handleNavigation("/HogarDeLibros/Recursos/Artistas")}
        >
          Artistas locales
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() =>
            handleNavigation("/HogarDeLibros/Recursos/Equipo_Computo")
          }
        >
          Equipos de cómputo
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() =>
            handleNavigation("/HogarDeLibros/Recursos/Catalogo_General")
          }
        >
          Libros generales
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() =>
            handleNavigation("/HogarDeLibros/Recursos/Catalogo_Infantil")
          }
        >
          Libros infantiles
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() => handleNavigation("/HogarDeLibros/Recursos/Mobiliario")}
        >
          Mobiliario
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() => handleNavigation("/HogarDeLibros/Recursos/Salas")}
        >
          Salas
        </Sidebar.Item>
      </Sidebar.Collapse>
    </>
  );
};

export default ResoursesOptions;
