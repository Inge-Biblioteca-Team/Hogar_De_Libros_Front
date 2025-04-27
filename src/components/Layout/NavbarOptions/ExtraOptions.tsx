import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import SidebarContext from "../../../Context/NavBarContext/NavbarContext";
import UseLogOut from "../../../features/Users/Hooks/UseLogOut";
import SidebarDriver from "../../../utils/SidebarDriver";
import ProfileOptions from "./ProfileOptions";

const ExtraOptions = () => {
  const { handleNavigation } = useContext(SidebarContext);

  const { mutate: logOut } = UseLogOut();

  const onLogOut = () => {
    logOut();
  };

  return (
    <>
      <Sidebar.Item
        id={"MgUsuer"}
        onClick={() => handleNavigation("/HogarDeLibros/Gestion_Usuarios")}
      >
        Gestión de usuarios
      </Sidebar.Item>
      <Sidebar.Collapse label="Colaboradores" id="Colabs">
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
      <Sidebar.Collapse label="Donaciones" id="Donaciones">
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
      <Sidebar.Collapse label="Amigos de la biblioteca" id="friends">
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
      <ProfileOptions />
      <SidebarDriver />
      <Sidebar.Item
        className="cursor-pointer bg-red-500 text-white text-center hidden max-sm:block"
        onClick={onLogOut}
      >
        Cerrar sesión
      </Sidebar.Item>
    </>
  );
};

export default ExtraOptions;
