import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import notFound from "../assets/not-found.svg";

const NotFound = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="text-center space-y-4 flex items-center justify-center flex-col">
          <img src={notFound} alt="No encontrado" />
          <h1 className="text-4xl font-bold text-gray-800">
            ¡Ups! Página no encontrada
          </h1>
          <p className="text-lg text-gray-600">
            No pudimos encontrar la página que buscas.
          </p>
          <p className="text-lg text-gray-800">
            Pero no te preocupes, siempre puedes explorar nuestros recursos
          </p>
          <Button color={"blue"} type="button" title="Regresar al Inicio">
            <Link
              to="/">
              Regresar al Inicio
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
