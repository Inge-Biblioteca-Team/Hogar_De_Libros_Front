import { useNavigate } from "react-router-dom";
import image from "../../../Assets/computo.png";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";
import { WsCount } from "../Services/SvComputer";

const ComputerInfo = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/HogarDeLibros/Equipo_Disponible");
  };

  const { data: count, isLoading } = useQuery<number, Error>(
    ["WS-Count"],
    () => WsCount(),
    {
      staleTime: 50,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <h2
        className="font-bold text-4xl text-center 
          max-sm:text-xl"
      >
        Equipos de cómputo
      </h2>
      {isLoading && <Skeleton height={300} />}
      {!isLoading && (
        <div className="w-full bg-white rounded-md flex p-4 text-lg">
          <span>
            <p>
              <strong className="">Acceso a computadoras, </strong>
              la biblioteca cuenta con <strong>{count}</strong> computadoras,
              las cuales están a disposición de los usuarios. <br />
              Con el uso del equipo tendras acceso a lo siguiente:
            </p>
            <ul className=" list-inside list-disc ml-5 text-base ">
              <li>Acceso a Internet</li>
              <li>Paquete Microsoft 365: Word, Excel y más</li>
              <li>Periféricos: Monitor, teclado y mouse</li>
              <li>Firma digital</li>
              <li>Todos los equipos cuentan con puertos usb</li>
            </ul>
            <p>
              Si necesitas hacer uso de estas, puedes acercarte a la biblioteca
              y preguntar sobre disponibilidad y requerimientos, o puedes
              acceder en línea{" "}
              <span
                onClick={goTo}
                className="underline hover:text-Body cursor-pointer"
              >
                aqui
              </span>{" "}
              para ver los términos y condiciones del uso de estos equipos, así
              como su <strong className="">disponibilidad.</strong>
            </p>
          </span>
          <div className="w-6/12 max-lg:hidden">
            <img src={image} alt="Equipos de computo" className="w-full h-60" />
          </div>
        </div>
      )}
    </>
  );
};

export default ComputerInfo;
