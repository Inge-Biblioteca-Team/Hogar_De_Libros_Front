import { Sidebar } from "flowbite-react";

const ForAdmin = () => {
  return (
    <>
      <Sidebar.ItemGroup>
        <Sidebar.Collapse label="Gestión">
          <Sidebar.Item href="/HogarDeLibros/Gestion/Equipos">
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
        <Sidebar.ItemGroup>
          <Sidebar.Collapse label="Prestamos">
            <Sidebar.Collapse label="Libros">
              <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/Pendientes">
                Solicitudes Pendientes
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/EnProceso">
                Préstamos Activos
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/Finalizados">
                Historial de préstamos
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse label="Equipo de Computo">
              <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/Computadoras">
                Generar Préstamos
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/HistorialDeEquipos">
                Historial de usos
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse label="Prestamos de salas">
              <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/SolicitudesDeSalas">
                Solicitudes de Salas
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/SalasReservadas">
                Préstamos en aprovados
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Préstamos/HistorialDePrestamos">
                Historial de Préstamos
              </Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.ItemGroup>
    </>
  );
};

export default ForAdmin;
