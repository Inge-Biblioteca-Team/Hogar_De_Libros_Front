import { Card, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { MiddleCrumb } from "../../../components/Breadcrumbs/BreadCrumbsItems";

const CirculationAndLoanMiddlePage = () => {
  const navi = useNavigate();
  return (
    <>
      <MiddleCrumb label="Circulación y prestamos" />
      <main className=" w-full flex items-center justify-center">
        <section className="flex gap-5 w-4/5 items-center justify-center flex-wrap">
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Prestamos_Circulacion/Catalogo_General")}
          >
            <h3>Catálogo General</h3>
            <Label value={`Total de libros disponibles para préstamo: `} />
            <Label value={`Último préstamo: `} />
          </Card>
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Prestamos_Circulacion/Catalogo_Infantil")}
          >
            <h3>Catálogo Infantil</h3>
            <Label value={`Total de libros infantiles disponibles para préstamo: `} />
            <Label value={`Último préstamo infantil: `} />
          </Card>
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Prestamos_Circulacion/Prestamo_Computo")}
          >
            <h3>Préstamos de Computo</h3>
            <Label value={`Total de préstamos de cómputo: `} />
            <Label value={`Préstamos en ejecución: `} />
            <Label value={`Último préstamo de cómputo: `} />
          </Card>
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Prestamos_Circulacion/Prestamos_Activos")}
          >
            <h3>Préstamos Activos</h3>
            <Label value={`Total de préstamos activos: `} />
            <Label value={`Fecha de vencimiento mas próxima: `} />
          </Card>
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Prestamos_Circulacion/Solicitudes_Libros")}
          >
            <h3>Solicitudes de Libros</h3>
            <Label value={`Total de solicitudes: `} />
            <Label value={`Solicitudes pendientes de respuesta: `} />
            <Label value={`Última solicitud: `} />
          </Card>
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Prestamos_Circulacion/Solicitudes_Salas")}
          >
            <h3>Solicitudes de Salas</h3>
            <Label value={`Total de solicitudes de salas: `} />
            <Label value={`Solicitudes pendientes de respuesta: `} />
            <Label value={`Última solicitud de sala: `} />
          </Card>
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Prestamos_Circulacion/Reserva_Aprovadas")}
          >
            <h3>Reservas Aprobadas</h3>
            <Label value={`Total de reservas aprobadas: `} />
            <Label value={`Última reserva aprobada: `} />
          </Card>
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Prestamos_Circulacion/Reservar_Sala")}
          >
            <h3>Reservar Sala</h3>
            <Label value={`Salas disponibles: `} />
            <Label value={`Última reserva realizada: `} />
          </Card>
        </section>
      </main>
    </>
  );
};

export default CirculationAndLoanMiddlePage;
