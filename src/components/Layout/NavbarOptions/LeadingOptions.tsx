import { Sidebar } from "flowbite-react";
import { useContext } from "react";
import SidebarContext from "../../../Context/NavBarContext/NavbarContext";

const LeadingOptions = () => {
  const {handleNavigation} = useContext(SidebarContext);

  return (
    <>
      <Sidebar.ItemGroup id="loansOPT">
        <Sidebar.Collapse label="Préstamo y circulación">
          <Sidebar.Item
            onClick={() =>
              handleNavigation("/HogarDeLibros/Prestamos_Circulacion/Catalogo_General")
            }
          >
            Préstamo de <br /> catálogo general
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() =>
              handleNavigation("/HogarDeLibros/Prestamos_Circulacion/Catalogo_Infantil")
            }
          >
            Préstamo de <br />
            catálogo infantil
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() =>
              handleNavigation("/HogarDeLibros/Prestamos_Circulacion/Prestamo_Computo")
            }
          >
            Préstamo de equipo <br /> de cómputo
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() =>
              handleNavigation("/HogarDeLibros/Prestamos_Circulacion/Prestamos_Activos")
            }
          >
            Préstamo de libros activos
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() =>
              handleNavigation("/HogarDeLibros/Prestamos_Circulacion/Solicitudes_Libros")
            }
          >
            Solicitud de préstamo <br /> de libros
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() =>
              handleNavigation("/HogarDeLibros/Prestamos_Circulacion/Solicitudes_Salas")
            }
          >
            Solicitud de préstamo <br /> de salas
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() =>
              handleNavigation("/HogarDeLibros/Prestamos_Circulacion/Reserva_Aprovadas")
            }
          >
            Reservas de sala aprobadas
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() =>
              handleNavigation("/HogarDeLibros/Prestamos_Circulacion/Reservar_Sala")
            }
          >
            Reservar sala
          </Sidebar.Item>
        </Sidebar.Collapse>
      </Sidebar.ItemGroup>
    </>
  );
};

export default LeadingOptions;
