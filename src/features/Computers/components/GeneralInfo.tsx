import { Button } from "flowbite-react";
import GeneralComputerInfo from "./GeneralComputerInfo";
import { Link } from "react-router-dom";

const GeneralInfo = () => {
  const computerCount = 20; //Se cambia por un conteo de los equipos inventariados, con un estado activo

  return (
    <div
      className=" grid grid-cols-2 lg:gap-6 max-lg:m-0 ml-2 max-sm:flex max-sm:flex-col
      max-sm:gap-4 max-lg:gap-10 max-lg:w-full "
    >
      <GeneralComputerInfo />
      <div
        className=" text-lg max-sm:text-sm flex flex-col justify-around items-center max-sm:gap-4"
      >
        <p>
          <strong className="">
            Acceso a computadoras,{" "}
          </strong>
          <span className="">
            la biblioteca cuenta con <strong>{computerCount}</strong>{" "}
            computadoras, las cuales están a disposición de los usuarios de la
            Biblioteca.
            <span className=" lg:text-lg hidden 2xl:text-3xl max-sm:block">
              Los equipos cuentan con:{" "}
              <strong className="2xl:text-3xl lg:text-lg">
                Firma Digital, acceso Gratuito a Internet, puertos USB y paquete
                Microsoft completo
              </strong>{" "}
            </span>
            <br />
            Si necesitas hacer uso de estas, puedes acercarte a la biblioteca y
            puedes preguntar sobre disponibilidad y requerimientos, o puedes acceder en
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
