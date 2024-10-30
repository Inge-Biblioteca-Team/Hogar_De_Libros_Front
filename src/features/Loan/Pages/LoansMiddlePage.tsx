import { Card, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { MiddleCrumb } from "../../../components/Breadcrumbs/BreadCrumbsItems";

const LoansMiddlePage = () => {
  const navi = useNavigate();
  return (
    <>
      <MiddleCrumb label="Historial de prestamos" />
      <main className=" w-full flex items-center justify-center">
        <section className=" flex gap-5 w-4/5 items-center justify-center mt-32">
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Historial/Libros")}
          >
            <h3>Prestamos de libros</h3>
            <Label value={`Total de prestamos brindados: `} />
            <Label value={`Ultimo préstamo: `} />
          </Card>
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Historial/Equipo_Computo")}
          >
            <h3>Equipos de computo</h3>
            <Label value={`Total de prestamos brindados: `} />
            <Label value={`Prestamos en ejecución: `} />
            <Label value={`Ultimo préstamo: `} />
          </Card>
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Historial/Salas")}
          >
            <h3>Salas</h3>
            <Label value={`Reservas aprobadas: `} />
            <Label value={`Ultima reserva: `} />
          </Card>
        </section>
      </main>
    </>
  );
};

export default LoansMiddlePage;
