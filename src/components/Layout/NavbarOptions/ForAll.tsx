import { Sidebar } from "flowbite-react";

const ForAll = () => {
  return (
    <>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="/" className="text-xl hover:text-blue-500">
          Inicio
        </Sidebar.Item>
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <Sidebar.Item className="" href="/HogarDeLibros">
          Catálogo Completo de libros
        </Sidebar.Item>
        <Sidebar.Collapse label="Búsqueda de libros">
          <Sidebar.Item href="/HogarDeLibros/Busqueda/Titulo">
            Por Título
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Busqueda/Avanzada">
            Búsqueda Avanzada
          </Sidebar.Item>
          <Sidebar.Item href="/HogarDeLibros/Busqueda/Infantiles">
            Catálogo Infantil
          </Sidebar.Item>
        </Sidebar.Collapse>
        <Sidebar.Item className="" href="/HogarDeLibros/ProximosEventos">
          Cronograma de eventos
        </Sidebar.Item>
        <Sidebar.Item className="" href="/HogarDeLibros/ProximosCursos">
          Cronograma de cursos
        </Sidebar.Item>
        <Sidebar.Item className="" href="/HogarDeLibros">
          Se un amigo Más
        </Sidebar.Item>
        <Sidebar.Item className="" href="/HogarDeLibros">
          Programas
        </Sidebar.Item>
        <Sidebar.Item
          className=""
          href="/HogarDeLibros/Gestion/Equipos/disponible"
        >
          Disponibilidad <br />
          de Equipo de cómputo
        </Sidebar.Item>
        <Sidebar.Item className="" href="/HogarDeLibros">
          Disponibilidad <br />
          de salas
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </>
  );
};

export default ForAll;
