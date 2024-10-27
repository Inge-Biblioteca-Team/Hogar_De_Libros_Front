import { Button } from "flowbite-react";
import GeneralComputerInfo from "./GeneralComputerInfo";
import { Link } from "react-router-dom";

const GeneralInfo = () => {
  const computerCount = 20; //Se cambia por un conteo de los equipos inventariados, con un estado activo

  return (
    <div className=" grid grid-cols-3  max-w-4xl gap-6">
      <GeneralComputerInfo />
      <div className="flex justify-between flex-col max-sm:text-sm max-sm:w-full max-sm:text-center max-sm:items-center col-span-2 text-2xl">
        <p>
          <strong>Acceso a Computadoras</strong>
          <span>
            La biblioteca cuenta con <strong>{computerCount}</strong>{" "}
            computadoras las cuales están a disposición de los usuarios de la
            biblioteca.
            <span className=" hidden max-sm:block">
              Los equipos cuentan con:{" "}
              <strong>
                Firma Digital,Acceso Gratuito a Internet, Puertos USB y paquete
                Microsoft completo
              </strong>{" "}
            </span>
            <br />
            Si necesitas hacer uso de estas, puedes acercarte a la biblioteca y
            preguntar sobre disponibilidad y requerimientos, o puedes acceder en
            línea dando click en el siguiente botón para ver los términos y
            condiciones del uso de estos equipos, así como su{" "}
            <strong>disponibilidad en tiempo real.</strong>
          </span>
        </p>
        <div>
          <Link to={"/HogarDeLibros/Equipo_Disponible"}>
            <Button color={"blue"}>Ver mas información</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
