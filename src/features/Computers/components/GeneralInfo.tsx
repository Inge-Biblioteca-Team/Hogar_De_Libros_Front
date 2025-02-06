import { Button } from "flowbite-react";
import GeneralComputerInfo from "./GeneralComputerInfo";
import { Link } from "react-router-dom";

const GeneralInfo = () => {
  const computerCount = 20; //Se cambia por un conteo de los equipos inventariados, con un estado activo

  return (
    <div className=" lg:grid lg:grid-cols-3 lg:max-w-4xl lg:gap-6
    flex flex-col 2xl:max-w-screen-2xl 2xl:gap-20">
      <GeneralComputerInfo />
      <div className="flex lg:justify-between flex-col max-sm:text-sm md:items-center lg:max-sm:w-full max-sm:text-center max-sm:items-center col-span-2 text-2xl
       m-2 lg:m-0 md:p-2">
        <p>
          <strong className="2xl:text-3xl">Acceso a computadoras, </strong>
          <span className="2xl:text-3xl">
             la biblioteca cuenta con <strong>{computerCount}</strong>{" "}
            computadoras las cuales están a disposición de los usuarios de la
            biblioteca.
            <span className=" hidden 2xl:text-3xl max-sm:block">
              Los equipos cuentan con:{" "}
              <strong className="2xl:text-3xl">
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
        <div className="m-4 text  lg:m-0">
          <Link to={"/HogarDeLibros/Equipo_Disponible"}>
            <Button className="md:w-52 2xl:w-72 2xl:h-14 2xl:items-center text-2xl " color={"blue"}>Ver mas información</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
