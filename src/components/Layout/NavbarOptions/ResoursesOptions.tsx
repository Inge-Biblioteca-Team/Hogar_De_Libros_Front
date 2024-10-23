import { Sidebar } from "flowbite-react";

const ResoursesOptions = () => {
  return (
    <>
      <Sidebar.Collapse label="Recursos">
        <Sidebar.Item href="/HogarDeLibros/Recursos/Artistas">
          Artistas Locales
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Recursos/Equipo_Computo">
          Equipos de Cómputo
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Recursos/Catalogo_General">
          Libros Generales
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Recursos/Catalogo_Infantil">
          Libros Infantiles
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Recursos/Mobiliario">
          Mobiliario
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Recursos/Salas">Salas</Sidebar.Item>
      </Sidebar.Collapse>
    </>
  );
};

export default ResoursesOptions;
