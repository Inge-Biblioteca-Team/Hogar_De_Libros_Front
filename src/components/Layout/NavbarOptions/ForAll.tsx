import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import UserContext from "../../../Context/UserContext/UserContext";
import SidebarContext from "../../../Context/NavBarContext/NavbarContext";

const ForAll = () => {
  const { currentUser } = useContext(UserContext);
  const { handleNavigation } = useContext(SidebarContext);

  const role = currentUser?.role;

  return (
    <>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          onClick={() => handleNavigation("/HogarDeLibros/Catalogo/Completo")}
        >
          Catálogo completo de libros
        </Sidebar.Item>
        <Sidebar.Collapse label="Búsqueda de libros">
          <Sidebar.Item
            onClick={() => handleNavigation("/HogarDeLibros/Catalogo/Catalogo_Completo")}
          >
            Por título
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() => handleNavigation("/HogarDeLibros/Catalogo/Avanzado")}
          >
            Búsqueda avanzada
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() => handleNavigation("/HogarDeLibros/Catalogo/Infantil")}
          >
            Catálogo infantil
          </Sidebar.Item>
        </Sidebar.Collapse>
        <Sidebar.Item
          className=""
          onClick={() => handleNavigation("/HogarDeLibros/Cronograma_Eventos")}
        >
          Cronograma de eventos
        </Sidebar.Item>
        <Sidebar.Item
          className=""
          onClick={() => handleNavigation("/HogarDeLibros/Cronograma_Cursos")}
        >
          Cronograma de cursos
        </Sidebar.Item>
        <Sidebar.Item
          className=""
          onClick={() => handleNavigation("/HogarDeLibros")}
        >
          Se un amigo más
        </Sidebar.Item>
        <Sidebar.Item
          className=""
          onClick={() => handleNavigation("/HogarDeLibros")}
        >
          Programas
        </Sidebar.Item>
        <Sidebar.Item
          className=""
          onClick={() =>
            handleNavigation("/HogarDeLibros/Equipo_Disponible")
          }
        >
          Disponibilidad <br />
          de equipo de cómputo
        </Sidebar.Item>
        {(role === "admin" || role === "creator") && (
          <Sidebar.Item
            className=""
            onClick={() => handleNavigation("/HogarDeLibros/Reserva_Salas")}
          >
            Reserva de salas
          </Sidebar.Item>
        )}
      </Sidebar.ItemGroup>
    </>
  );
};

export default ForAll;
