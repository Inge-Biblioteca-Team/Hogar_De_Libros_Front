import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { GetStatus } from "../../Loan/Services/SvComputerLoan";
import { Card } from "flowbite-react";
import {
  BreadCrumbsItems,
  BreadLastItems,
} from "../../../components/Breadcrumbs/BreadCrumbsItems";
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";
import NoResults from "../../../components/NoResults";

type ComputerStatus = {
  Status: string;
  MachineNumber: number;
};

const conditionColors: { [key: string]: string } = {
  "En Uso": "text-red-500",
  Disponible: "text-green-500",
  Mantenimiento: "text-yellow-500",
};
const AvailableComputers = () => {
  const { data: computers, isLoading } = useQuery<ComputerStatus[], Error>(
    ["WSStatus"],
    () => GetStatus(),
    {
      staleTime: 600,
    }
  );
  return (
    <>
      <BreadCrumbsItems>
        <BreadLastItems text="Disponibilidad de equipos de cómputo" />
      </BreadCrumbsItems>
      <div className=" flex  flex-col lg:flex-row items-center justify-center mt-10">
        <Card className="m-4 lg:text-md tex">
          <p className="lg:w-96 w-full">
            La biblioteca ofrece el servicio de préstamo de equipos de cómputo.
            Si necesita utilizar uno, puede acudir al área correspondiente
            dentro de la biblioteca. <br />
            Sin embargo, es importante tener en cuenta las siguientes normas:{" "}
            <br />
            <ul className="list-disc list-inside">
              <li>
                <strong>No</strong> está permitido comer, ni beber cerca de los
                equipos de cómputo.
              </li>
              <li>
                Cualquier <strong>daño</strong> causado al equipo será
                responsabilidad del usuario, quien deberá cubrir los costos de
                reparación o reemplazo del equipo dañado.
              </li>
              <li>No apagué el equipo directamente desde el botón del CPU.</li>
              <li>
                En caso de requerir audífonos, puede solicitarlos al personal a
                cargo de la biblioteca.
              </li>
              <li>
                El usuario es responsable de finalizar correctamente el préstamo
                del equipo al término de su uso.
              </li>
            </ul>
            A continuación, se muestra el estado actual de cada equipo con su
            respectivo número. <br />
            La disponibilidad se indica mediante los siguientes colores:
            <ul>
              <li>
                <span className="text-green-500 text-2xl">●</span>
                <span className="ml-2">Disponible</span>
              </li>
              <li>
                <span className="text-yellow-500 text-2xl">●</span>
                <span className="ml-2">En mantenimiento</span>
              </li>
              <li>
                <span className="text-red-500 text-2xl">●</span>
                <span className="ml-2">En uso</span>
              </li>
            </ul>
          </p>
        </Card>
        {isLoading ? (
          <div className=" w-full flex items-center justify-center">
            <figure>
              <img width={400} src={Loader} alt="...Cargando" />
              <figcaption className=" text-center">...Cargando</figcaption>
            </figure>
          </div>
        ) : computers ? (
          <div className="w-full ">
            <div className="grid lg:grid-cols-4 grid-cols-3 mr-10 ml-10 lg:ml-0 lg:mr-0 gap-x-4 grid-rows-5 w-4/5 gap-y-6">
              {computers?.map((computer) => (
                <div
                  key={computer.MachineNumber}
                  className="flex flex-col-reverse items-center p-2"
                >
                  <div
                    className={`text-6xl ${conditionColors[computer.Status]}`}
                  >
                    <FontAwesomeIcon icon={faDesktop} />
                  </div>
                  <div className="text-black font-semibold text-xl">
                    PC-
                    {computer.MachineNumber}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <NoResults />
        )}
      </div>
    </>
  );
};

export default AvailableComputers;
