import { Sidebar } from "flowbite-react";

const ServicesOptions = () => {
  return (
    <>
      <Sidebar.Collapse label="Servicios">
        <Sidebar.Item href="/HogarDeLibros/Servicios/Cursos">
          Cursos
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Servicios/Eventos">
          Eventos
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Servicios/Programas">
          Programas
        </Sidebar.Item>
      </Sidebar.Collapse>
    </>
  );
};

export default ServicesOptions;
