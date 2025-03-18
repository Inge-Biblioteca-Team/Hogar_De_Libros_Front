import { Card, Label } from "flowbite-react";
import { MiddleCrumb } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import { useNavigate } from "react-router-dom";

const EventMiddlePage = () => {
    
  const navi = useNavigate();
  return (
    <>
      <MiddleCrumb label="Servicios" />
      <main className=" w-full flex items-center justify-center">
        <section className=" flex gap-5 w-4/5 items-center justify-center mt-32">
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() =>
              navi("/HogarDeLibros/Servicios/Cursos")
            }
          >
            <h3>Cursos</h3>
            <Label value={`Cursos impartidos: `} />
            <Label value={`Cursos pendientes de ejecución: `} />
            <Label value={`Fecha más próxima de curso: `} />
          </Card>
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Servicios/Eventos")}
          >
            <h3>Eventos</h3>
            <Label value={`Eventos realizados: `} />
            <Label value={`Eventos pendientes de ejecución: `} />
            <Label value={`Fecha más próxima de evento: `} />
          </Card>
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Servicios/Programas")}
          >
            <h3>Programas</h3>
            <Label value={`Programas existentes: `} />
            <Label value={`Programas activos: `} />
            <Label value={`Programas antiguos: `} />
          </Card>         
        </section>
      </main>
    </>
  );
};

export default EventMiddlePage;
