import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { GetStatus } from "../../Loan/Services/SvComputerLoan";
import { Breadcrumb, Card } from "flowbite-react";
import { HomeCrumb, LastCrumb } from "../../../components/BreadCrumb";

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
  const { data: computers } = useQuery<ComputerStatus[], Error>(
    ["WSStatus"],
    () => GetStatus(),
    {
      staleTime: 600,
    }
  );
  return (
    <>
      <Breadcrumb className=" custom-breadcrumb">
        <HomeCrumb />
        <LastCrumb CurrentPage="Disponibilidad de equipos" />
      </Breadcrumb>
      <div className=" flex items-center justify-center mt-10">
        <Card className="ml-4">
          <p className="w-80">
            Recuerda que la biblioteca cuenta con el servicio de préstamo de
            equipos de cómputo. Si necesitas utilizar uno, puedes acudir a la
            biblioteca. <br />
            Sin embargo, solicitamos que tomes en cuenta las siguientes
            consideraciones: <br />
            <ul className="list-disc list-inside">
              <li> <strong>No</strong> se permite comer junto al equipo de cómputo.</li>
              <li>
                Cualquier <strong>daño</strong> causado al equipo será responsabilidad del
                usuario, quien deberá reemplazar el componente dañado.
              </li>
              <li>No apagues el equipo directamente desde el botón del CPU.</li>
              <li>En caso de requerir audífonos, solicítalos al personal.</li>
            </ul>
            Aqui puedes ver el estado actual de cada Equipo por su respectivo
            numero. <br />
            Su Disponibilidad esta presentada por colores de la siguiente
            manera.
            <ul>
              <li>
                <span className="text-green-500 text-2xl">●</span>
                <span className="ml-2">Disponible</span>
              </li>
              <li>
                <span className="text-yellow-500 text-2xl">●</span>
                <span className="ml-2">En Mantenimiento</span>
              </li>
              <li>
                <span className="text-red-500 text-2xl">●</span>
                <span className="ml-2">En Uso</span>
              </li>
            </ul>
          </p>
        </Card>
        <div className="w-full">
          <div className="grid grid-cols-4 grid-rows-5 w-4/5 gap-y-6">
            {computers?.map((computer) => (
              <div
                key={computer.MachineNumber}
                className="flex flex-col-reverse items-center p-2"
              >
                <div className={`text-6xl ${conditionColors[computer.Status]}`}>
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
      </div>
    </>
  );
};

export default AvailableComputers;
