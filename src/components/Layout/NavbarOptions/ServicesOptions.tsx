import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import SidebarContext from "../../../Context/NavBarContext/NavbarContext";

const ServicesOptions = () => {
  const { handleNavigation } = useContext(SidebarContext);
  return (
    <>
      <Sidebar.Collapse label="Servicios" id="services">
        <Sidebar.Item
          onClick={() => handleNavigation("/HogarDeLibros/Servicios/Cursos")}
        >
          Cursos
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() => handleNavigation("/HogarDeLibros/Servicios/Eventos")}
        >
          Eventos
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() => handleNavigation("/HogarDeLibros/Servicios/Programas")}
        >
          Programas
        </Sidebar.Item>
      </Sidebar.Collapse>
    </>
  );
};

export default ServicesOptions;
