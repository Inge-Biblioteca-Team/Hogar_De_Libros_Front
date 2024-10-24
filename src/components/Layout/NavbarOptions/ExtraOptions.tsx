import { Sidebar } from "flowbite-react";

const ExtraOptions = () => {
  return (
    <>
      <Sidebar.Item href="/HogarDeLibros/Gestion_Usuarios">
        Gestión Usuarios
      </Sidebar.Item>
      <Sidebar.Collapse label="Colaboradores">
        <Sidebar.Item href="/HogarDeLibros/Colaboraciones/Pendientes_Respuesta">
          Propuestas de colaboración
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Colaboraciones/Pendientes_Realizacion">
          Colaboraciones futuras
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Colaboraciones/Historial">
          Historial de Colaboradores
        </Sidebar.Item>
      </Sidebar.Collapse>
      <Sidebar.Collapse label="Donaciones">
        <Sidebar.Item href="/HogarDeLibros/Donaciones/Pendientes_Respuesta">
          Propuestas de donación
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Colaboraciones/Pendiente_Recepcion">
          Pendiente de recepción
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Colaboraciones/Historial">
          Historial de donaciones
        </Sidebar.Item>
      </Sidebar.Collapse>
      <Sidebar.Collapse label="Amigos de la biblioteca">
        <Sidebar.Item href="/HogarDeLibros/Amigos/Pediente_Respuesta">
          Solicitudes de amigos
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Amigos/Lista_Amigos">
          Lista de amigos
        </Sidebar.Item>
      </Sidebar.Collapse>
    </>
  );
};

export default ExtraOptions;
