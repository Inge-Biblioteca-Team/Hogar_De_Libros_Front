import { Card, Label } from "flowbite-react";
import { MiddleCrumb } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import { useNavigate } from "react-router-dom";

const ColabsMiddleScreen = () => {
  const navi = useNavigate();
  return (
    <>
      <MiddleCrumb label="Colaboraciones" />
      <main className=" w-full flex items-center justify-center">
        <section className=" flex gap-5 w-4/5 items-center justify-center mt-32">
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() =>
              navi("/HogarDeLibros/Colaboraciones/Pendientes_Respuesta")
            }
          >
            <h3>Propuestas de colaboración</h3>
            <Label value={`Solicitudes pendientes de respuesta: `} />
            <Label value={`Fecha de última solicitud: `} />
          </Card>
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() =>
              navi("/HogarDeLibros/Colaboraciones/Pendientes_Realizacion")
            }
          >
            <h3>Colaboraciones pendientes de realización</h3>
            <Label value={`Donación más próxima: `} />
            <Label value={`Colaboraciones pendientes de realización: `} />
          </Card>

          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Colaboraciones/Historial")}
          >
            <h3>Historial de colaboraciones</h3>
            <Label value={`Colaboraciones realizadas: `} />
            <Label value={`Última colaboración: `} />
          </Card>
        </section>
      </main>
    </>
  );
};

export default ColabsMiddleScreen;
