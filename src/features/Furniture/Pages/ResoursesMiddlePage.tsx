import { Card, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { MiddleCrumb } from "../../../components/Breadcrumbs/BreadCrumbsItems";

const ResoursesMiddlePage = () => {
  const navi = useNavigate();
  return (
    <>
      <MiddleCrumb label="Recursos" />
      <main className=" w-full flex items-center justify-center">
        <section className=" flex gap-5 w-4/5 items-center justify-center flex-wrap">
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Recursos/Artistas")}
          >
            <h3>Artistas</h3>
            <Label value={`Registros existentes: `} />
            <Label value={`Registros activos: `} />
            <Label value={`Registros dados de baja: `} />
          </Card>
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Recursos/Equipo_Computo")}
          >
            <h3>Equipos de cómputo</h3>
            <Label value={`Recursos existentes: `} />
            <Label value={`Recursos activos: `} />
            <Label value={`Recursos dados de baja: `} />
          </Card>
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Recursos/Catalogo_General")}
          >
            <h3>Libros generales</h3>
            <Label value={`Recursos existentes: `} />
            <Label value={`Recursos activos: `} />
            <Label value={`Recursos dados de baja: `} />
          </Card>
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Recursos/Catalogo_Infantil")}
          >
            <h3>Libros infantiles</h3>
            <Label value={`Recursos existentes: `} />
            <Label value={`Recursos activos: `} />
            <Label value={`Recursos dados de baja: `} />
          </Card>
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Recursos/Mobiliario")}
          >
            <h3>Mobiliario</h3>
            <Label value={`Recursos existentes: `} />
            <Label value={`Recursos activos: `} />
            <Label value={`Recursos dados de baja: `} />
          </Card>
          <Card
            className="h-72 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Recursos/Salas")}
          >
            <h3>Salas</h3>
            <Label value={`Recursos existentes: `} />
            <Label value={`Recursos activos: `} />
            <Label value={`Recursos dados de baja: `} />
          </Card>
        </section>
      </main>
    </>
  );
};

export default ResoursesMiddlePage;
