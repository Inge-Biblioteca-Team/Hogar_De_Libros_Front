import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import UserContext from "../../../Context/UserContext/UserContext";
import SidebarContext from "../../../Context/NavBarContext/NavbarContext";
import UseLogOut from "../../../features/Users/Hooks/UseLogOut";
import DriverForUsuer from "../../../utils/DriverForUsuer";
const ForAll = () => {
  const { currentUser } = useContext(UserContext);
  const { handleNavigation } = useContext(SidebarContext);

  const role = currentUser?.role;

  const { mutate: logOut } = UseLogOut();

  const onLogOut = () => {
    logOut();
  };

  return (
    <>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          id="home"
          className="cursor-pointer text-2xl"
          onClick={() => handleNavigation("/HogarDeLibros")}
        >
          Inicio
        </Sidebar.Item>

        <Sidebar.Item
          id="full-catalog"
          onClick={() => handleNavigation("/HogarDeLibros/Catalogo/Completo")}
        >
          Catálogo completo de libros
        </Sidebar.Item>

        <Sidebar.Collapse id="book-search" label="Búsqueda de libros">
          <Sidebar.Item
            id="search-by-title"
            onClick={() =>
              handleNavigation("/HogarDeLibros/Catalogo/Catalogo_Completo")
            }
          >
            Por título
          </Sidebar.Item>
          <Sidebar.Item
            id="advanced-search"
            onClick={() => handleNavigation("/HogarDeLibros/Catalogo/Avanzado")}
          >
            Búsqueda avanzada
          </Sidebar.Item>
          <Sidebar.Item
            id="children-catalog"
            onClick={() => handleNavigation("/HogarDeLibros/Catalogo/Infantil")}
          >
            Catálogo infantil
          </Sidebar.Item>
        </Sidebar.Collapse>

        <Sidebar.Item
          id="event-schedule"
          onClick={() => handleNavigation("/HogarDeLibros/Cronograma_Eventos")}
        >
          Cronograma de eventos
        </Sidebar.Item>

        <Sidebar.Item
          id="course-schedule"
          onClick={() => handleNavigation("/HogarDeLibros/Cronograma_Cursos")}
        >
          Cronograma de cursos
        </Sidebar.Item>

        <Sidebar.Item
          id="friends-collaborators"
          onClick={() =>
            handleNavigation("/HogarDeLibros/AmigosYColaboradores")
          }
        >
          Sé un amigo más
        </Sidebar.Item>

        <Sidebar.Item
          id="program-activities"
          onClick={() =>
            handleNavigation("/HogarDeLibros/Cronograma_Actividades")
          }
        >
          Actividades de programas
        </Sidebar.Item>

        <Sidebar.Item
          id="computer-availability"
          onClick={() => handleNavigation("/HogarDeLibros/Equipo_Disponible")}
        >
          Disponibilidad <br />
          de equipo de cómputo
        </Sidebar.Item>

        {(role === "admin" ||
          role === "creator" ||
          role === "institucional") && (
          <Sidebar.Item
            id="room-reservation"
            onClick={() => handleNavigation("/HogarDeLibros/Reserva_Salas")}
          >
            Reserva de salas
          </Sidebar.Item>
        )}

        <Sidebar.Item
          id="logout"
          className="cursor-pointer bg-red-500 text-white text-center hidden max-sm:block"
          onClick={onLogOut}
        >
          Cerrar sesión
        </Sidebar.Item>
        <DriverForUsuer />
      </Sidebar.ItemGroup>
    </>
  );
};

export default ForAll;
