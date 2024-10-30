import { Card, Label } from "flowbite-react"
import { MiddleCrumb } from "../../../components/Breadcrumbs/BreadCrumbsItems"
import { useNavigate } from "react-router-dom";

const FriendMiddleScreen = () => {
  const navi = useNavigate();

  return (
    <>
      <MiddleCrumb label="Amigos de la biblioteca" />
      <main className=" w-full flex items-center justify-center">
        <section className=" flex gap-5 w-4/5 items-center justify-center mt-32">
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Amigos/Pendiente_Respuesta")}
          >
            <h3>Solicitudes</h3>
            <Label value={`Solicitudes pendientes de respuesta: `} />
            <Label value={`Fecha de ultima solicitud: `} />
          </Card>
        
    
          <Card
            className="h-96 w-80 transition-transform hover:scale-105"
            onClick={() => navi("/HogarDeLibros/Amigos/Lista_Amigos")}
          >
            <h3>Historial de amigo</h3>
            <Label value={`Nuestro primer amigo: `}/>
            <Label value={`Nuestro amigo mas reciente: `}/>
          </Card>
        </section>
      </main>
    </>
  );
};

export default FriendMiddleScreen;
