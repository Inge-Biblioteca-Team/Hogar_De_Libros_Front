import { Sidebar } from "flowbite-react";

const ForAdmin = () => {
  return (
    <>
      <Sidebar.ItemGroup>
        <Sidebar.Collapse label="Gestión">
          <Sidebar.Item href="/HogarDeLibros/Gestion/Equipos">
            Equipos de Cómputo
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/Computadoras">
            Préstamo de <br />
            Equipos de Cómputo
          </Sidebar.Item>
          <Sidebar.Collapse className=" font-bold" label="Libros">
            <Sidebar.Item href="/HogarDeLibros/Gestion/Libros">
              Catálogo General
            </Sidebar.Item>
            <Sidebar.Item href="/HogarDeLibros/Gestion/LibrosI">
              Catálogo Infantil
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="/HogarDeLibros/Gestion/Artistas">
            Artistas Locales
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Gestion/Salas">Salas</Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Gestion/Mobiliario">
            Mobiliario
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Gestion/Programas">
            Programas
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Gestion/Eventos">
            Eventos
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Gestion/Cursos">
            Cursos
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Gestion/Usuarios">
            Usuarios
          </Sidebar.Item>
        </Sidebar.Collapse>
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <Sidebar.Collapse label="Préstamos">
          <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/Pendientes">
            Solicitudes Pendientes
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/EnProceso">
            Préstamos Activos
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/Finalizados">
            Préstamos Finalizados
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/HistorialDeEquipos">
            Historial de uso <br /> Equipo de cómputo
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/SolicitudesDeSalas">
            Solicitudes de Salas
          </Sidebar.Item>
        </Sidebar.Collapse>
      </Sidebar.ItemGroup>
    </>
  );
};

export default ForAdmin;
