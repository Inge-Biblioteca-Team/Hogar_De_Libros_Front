import { Sidebar } from "flowbite-react";
import { useState } from "react";

const HomeNavbar = () => {
  const [visible, setVisible] = useState(false);

  const showSidebar = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button type="button" className=" absolute left-4" onClick={showSidebar}>
        {" "}
        <img
          className="invert dark:invert-0
            dark:hover:invert
            hover:scale-110 
            hover:invert-0"
          width={35}
          src="https://cdn-icons-png.flaticon.com/128/561/561184.png"
          alt=""
        />
      </button>
      <Sidebar
        className={` bottom-0 left-0 top-20 mt-5 pb-24 opacity-95 ${
          visible ? ` fixed` : `hidden`
        }`}
        id="sideBar"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/" className="text-xl hover:text-blue-500">
              Inicio
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item className="" href="/HogarDeLibros">
              Catálogo Completo de libros
            </Sidebar.Item>
            <Sidebar.Collapse label="Busqueda de libros">
              <Sidebar.Item href="/HogarDeLibros/Busqueda/Titulo">
                Por Título
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Busqueda/Avanzada">
                Busqueda Avanzada
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Busqueda/Infantiles">
                Catalogo Infantil
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item className="" href="/HogarDeLibros">
              Cronograma de eventos
            </Sidebar.Item>
            <Sidebar.Item className="" href="/HogarDeLibros">
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
              de Equipo de computo
            </Sidebar.Item>
            <Sidebar.Item className="" href="/HogarDeLibros">
              Disponibilidad <br />
              de salas
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Collapse label="Gestión">
              <Sidebar.Item href="/HogarDeLibros/Gestion/Equipos">
                Equipo de Cómputo
              </Sidebar.Item>
              <Sidebar.Collapse className=" font-bold" label="Libros">
                <Sidebar.Item href="/HogarDeLibros/Gestion/Libros">
                  Catalogo General
                </Sidebar.Item>
                <Sidebar.Item href="/HogarDeLibros/Gestion/LibrosI">
                  Catalogo Infantil
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Artistas">
                Artistas Locales
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Salas">
                Salas
              </Sidebar.Item>
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
            <Sidebar.Collapse label="Prestamos">
              <Sidebar.Item href="/HogarDeLibros/Gestion/Prestamos/Pendientes">
                Solicitudes Pendientes
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Prestamos/EnProceso">
                Prestamos Activos
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Prestamos/Finalizados">
                Prestamos Finalizados
              </Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default HomeNavbar;
