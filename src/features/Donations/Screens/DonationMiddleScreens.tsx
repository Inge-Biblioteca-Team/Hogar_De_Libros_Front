import { Card, Label } from "flowbite-react";

import { useNavigate } from "react-router-dom";
import { MiddleCrumb } from "../../../components/Breadcrumbs/BreadCrumbsItems";

const DonationMiddleScreens = () => {
  const navi = useNavigate();

  return (
    <>
      <MiddleCrumb label="Donaciones" />
      <main className=" w-full flex items-center justify-center">
        <section className=" flex gap-5 w-4/5 items-center justify-center mt-32">
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() =>
              navi("/HogarDeLibros/Donaciones/Pendientes_Respuesta")
            }
          >
            <h3>Propuestas de donación</h3>
            <Label value={`Solicitudes pendientes de respuesta: `} />
            <Label value={`Fecha de ultima solicitud: `} />
          </Card>
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() =>
              navi("/HogarDeLibros/Donaciones/Pendiente_Recepcion")
            }
          >
            <h3>Donaciones pendientes de recepción</h3>
            <Label value={`Donación mas próxima: `} />
            <Label value={`Donaciones en espera de recepción: `} />
          </Card>

          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Donaciones/Historial")}
          >
            <h3>Historial de donaciones</h3>
            <Label value={`Donaciones recibidas: `} />
            <Label value={`Ultima donación: `} />
          </Card>
        </section>
      </main>
    </>
  );
};

export default DonationMiddleScreens;
