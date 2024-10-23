import { Sidebar } from "flowbite-react";

const LeadingOptions = () => {
  return (
    <>
      <Sidebar.ItemGroup>
        <Sidebar.Collapse label="Préstamos y circulación">
          <Sidebar.Item href="/HogarDeLibros/Prestamos_Circulacion/Catalogo_General">
            Préstamo de <br /> catálogo General
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Prestamos_Circulacion/Catalogo_Infantil">
            Préstamo de <br />
            catálogo Infantil
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Prestamos_Circulacion/Prestamo_Computo">
            Préstamo de equipo <br /> de cómputo
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Prestamos_Circulacion/Prestamos_Activos">
            Préstamos de libro activos
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Prestamos_Circulacion/Solicitudes_Libros">
            Solicitudes de Libros
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Prestamos_Circulacion/Solicitudes_Salas">
            Solicitudes de Salas
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Prestamos_Circulacion/Reserva_Aprovadas">
            Reserva de sala aprobadas
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Prestamos_Circulacion/Reservar_Sala">
            Reservar sala
          </Sidebar.Item>
        </Sidebar.Collapse>
      </Sidebar.ItemGroup>
    </>
  );
};

export default LeadingOptions;
