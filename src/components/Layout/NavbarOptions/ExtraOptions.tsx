import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import SidebarContext from "../../../Context/NavBarContext/NavbarContext";

const ExtraOptions = () => {
  const { handleNavigation } = useContext(SidebarContext);

  return (
    <>
      <Sidebar.Item
        onClick={() => handleNavigation("/HogarDeLibros/Gestion_Usuarios")}
      >
        Gestión Usuarios
      </Sidebar.Item>
      <Sidebar.Collapse label="Colaboradores">
        <Sidebar.Item
          onClick={() =>
            handleNavigation(
              "/HogarDeLibros/Colaboraciones/Pendientes_Respuesta"
            )
          }
        >
          Propuestas de colaboración
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() =>
            handleNavigation(
              "/HogarDeLibros/Colaboraciones/Pendientes_Realizacion"
            )
          }
        >
          Colaboraciones futuras
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() =>
            handleNavigation("/HogarDeLibros/Colaboraciones/Historial")
          }
        >
          Historial de colaboradores
        </Sidebar.Item>
      </Sidebar.Collapse>
      <Sidebar.Collapse label="Donaciones">
        <Sidebar.Item
          onClick={() =>
            handleNavigation("/HogarDeLibros/Donaciones/Pendientes_Respuesta")
          }
        >
          Propuestas de donación
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() =>
            handleNavigation("/HogarDeLibros/Donaciones/Pendiente_Recepcion")
          }
        >
          Pendiente de recepción
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() =>
            handleNavigation("/HogarDeLibros/Donaciones/Historial")
          }
        >
          Historial de donaciones
        </Sidebar.Item>
      </Sidebar.Collapse>
      <Sidebar.Collapse label="Amigos de la biblioteca">
        <Sidebar.Item
          onClick={() =>
            handleNavigation("/HogarDeLibros/Amigos/Pendiente_Respuesta")
          }
        >
          Solicitudes de amigos
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() => handleNavigation("/HogarDeLibros/Amigos/Lista_Amigos")}
        >
          Lista de amigos
        </Sidebar.Item>
      </Sidebar.Collapse>
    </>
  );
};

export default ExtraOptions;
