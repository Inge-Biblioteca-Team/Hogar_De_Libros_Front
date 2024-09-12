import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { GetStatus } from "../../Loan/Services/SvComputerLoan";
import { Breadcrumb } from "flowbite-react";
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
      <HomeCrumb/>
      <LastCrumb CurrentPage="Disponibilidad de equipos"/>
      </Breadcrumb>
      <div className=" flex items-center justify-center mt-5">
        <div>
          aqui debe ir lo de recorda que ......
        </div>
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

      <div className="flex justify-center mt-5 space-x-8">
        <div className="flex items-center">
          <span className="text-green-500 text-2xl">●</span>
          <span className="ml-2">Disponible</span>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-500 text-2xl">●</span>
          <span className="ml-2">En Mantenimiento</span>
        </div>
        <div className="flex items-center">
          <span className="text-red-500 text-2xl">●</span>
          <span className="ml-2">En Uso</span>
        </div>
      </div>
    </>
  );
};

export default AvailableComputers;
