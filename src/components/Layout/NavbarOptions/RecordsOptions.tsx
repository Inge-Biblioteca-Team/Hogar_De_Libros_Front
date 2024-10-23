import { Sidebar } from "flowbite-react";

const RecordsOptions = () => {
  return (
    <>
      <Sidebar.Collapse label="Historial de préstamos">
        <Sidebar.Item href="/HogarDeLibros/Historial/Libros">
          Libros
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Historial/Equipo_Computo">
          Equipo de cómputo
        </Sidebar.Item>
        <Sidebar.Item href="/HogarDeLibros/Historial/Salas">Salas</Sidebar.Item>
      </Sidebar.Collapse>
    </>
  );
};

export default RecordsOptions;
