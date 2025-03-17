import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import UserContext from "../../../Context/UserContext/UserContext";
import SidebarContext from "../../../Context/NavBarContext/NavbarContext";
import toast from "react-hot-toast";
const ForAll = () => {
  const { currentUser } = useContext(UserContext);
  const { handleNavigation } = useContext(SidebarContext);

  const role = currentUser?.role;

  const closeSession = () => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("currentUser");
    handleNavigation("/");
    toast.success("Éxito al cerrar sesión")
  };

  return (
    <>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          className=" cursor-pointer text-2xl"
          onClick={() => handleNavigation("/HogarDeLibros")}
        >
          Inicio
        </Sidebar.Item>
        <Sidebar.Item
          onClick={() => handleNavigation("/HogarDeLibros/Catalogo/Completo")}
        >
          Catálogo completo de libros
        </Sidebar.Item>
        <Sidebar.Collapse label="Búsqueda de libros">
          <Sidebar.Item
            onClick={() =>
              handleNavigation("/HogarDeLibros/Catalogo/Catalogo_Completo")
            }
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
          onClick={() =>
            handleNavigation("/HogarDeLibros/AmigosYColaboradores")
          }
        >
          Sé un amigo más
        </Sidebar.Item>
        <Sidebar.Item
          className=""
          onClick={() =>
            handleNavigation("/HogarDeLibros/Cronograma_Actividades")
          }
        >
          Actividades de programas
        </Sidebar.Item>
        <Sidebar.Item
          className=""
          onClick={() => handleNavigation("/HogarDeLibros/Equipo_Disponible")}
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
        <Sidebar.Item className="cursor-pointer bg-red-500 text-white text-center hidden max-sm:block"
         onClick={()=>closeSession()} >
          Cerrar sesión
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </>
  );
};

export default ForAll;
