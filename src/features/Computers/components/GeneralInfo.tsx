import { Button } from "flowbite-react";
import GeneralComputerInfo from "./GeneralComputerInfo";
import { Link } from "react-router-dom";

const GeneralInfo = () => {
  const computerCount = 20; //Se cambia por un conteo de los equipos inventariados, con un estado activo

  return (
    <div
      className=" lg:grid lg:grid-cols-3 grid-cols-3 lg:gap-6 max-sm:max-w-full
    flex flex-col  lg:w-full lg:pl-20 lg:pr-20 pl-20 pr-20
    max-sm:pl-0 max-sm:pr-0 md:pl-0 md:pr-0 "
    >
      <GeneralComputerInfo />
      <div
        className=" text-lg max-sm:text-sm"
      >
        <p>
          <strong className="">
            Acceso a computadoras,{" "}
          </strong>
          <span className="">
            la biblioteca cuenta con <strong>{computerCount}</strong>{" "}
            computadoras las cuales están a disposición de los usuarios de la
            biblioteca.
            <span className=" lg:text-lg hidden 2xl:text-3xl max-sm:block">
              Los equipos cuentan con:{" "}
              <strong className="">
                Firma Digital,Acceso Gratuito a Internet, Puertos USB y paquete
                Microsoft completo
              </strong>{" "}
            </span>
            <br />
            Si necesitas hacer uso de estas, puedes acercarte a la biblioteca y
            preguntar sobre disponibilidad y requerimientos, o puedes acceder en
            línea dando click en el siguiente botón para ver los términos y
            condiciones del uso de estos equipos, así como su{" "}
            <strong className="">disponibilidad en tiempo real.</strong>
          </span>
        </p>
        <div className="">
          <Link to={"/HogarDeLibros/Equipo_Disponible"}>
            <Button
              color={"blue"}
            >
              Ver más información
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
