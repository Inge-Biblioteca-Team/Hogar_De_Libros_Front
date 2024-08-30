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
        className={` bottom-0 left-0 top-20 mt-5 opacity-95 ${
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

            <Sidebar.Collapse label="Busquedas de libros">
              <Sidebar.Item href="/HogarDeLibros/Busqueda/Titulo">
                Por Titulo
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Busqueda/Avanzada">
                Busqueda Avanzada
              </Sidebar.Item>
              <Sidebar.Collapse label="Categorias">
                <Sidebar.Item href="#">Obras Generales</Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.Collapse>

            <Sidebar.Collapse label="Gestión">
              <Sidebar.Item href="/HogarDeLibros/Gestion/Equipos">
                Gestion de Equipo <br /> de Cómputo
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Libros">
                Gestion de Artistas <br />Locales
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Libros">
                Gestion de Salas
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Libros">
                Gestion de Mobiliario
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Libros">
                Gestion de Programas
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Libros">
                Gestion de Eventos
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Libros">
                Gestion de Cursos
              </Sidebar.Item>
              <Sidebar.Item href="/HogarDeLibros/Gestion/Libros">
                Gestion de Usuarios
              </Sidebar.Item>
            </Sidebar.Collapse>

              <Sidebar.Item href="/HogarDeLibros/Gestion/Libros">
                Solicitudes Pendientes
              </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default HomeNavbar;
