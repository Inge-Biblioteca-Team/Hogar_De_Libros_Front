import { useEffect, useState } from "react";
import { GetComputersByCondition } from "../Services/SvComputer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

type Computer = {
  EquipamentUniqueCode: string;
  ConditionRating: number;
  MachineNumber: number;
};

const conditionColors: { [key: number]: string } = {
  1: "text-red-500", // En uso
  2: "text-green-500", // Disponible
  3: "text-yellow-500", // En mantenimiento
};

const AvailableComputers = () => {
  const [computers, setComputers] = useState<Computer[]>([]);

  useEffect(() => {
    const fetchComputers = async () => {
      try {
        const response = await GetComputersByCondition();

        if (response && Array.isArray(response.data)) {
          setComputers(response.data); 
        } else {
          setComputers([]); 
        }
      } catch (error) {
        console.error("Error fetching computers:", error);
        setComputers([]); 
      }
    };

    fetchComputers();
  }, []);

  return (
    <>
    <h5 className="text-center font-bold">Disponibilidad de computadoras</h5>
      <div className="grid grid-cols-6 gap-26">
        {computers.map((computer) => (
          <div
            key={computer.EquipamentUniqueCode && computer.ConditionRating} 
            className="flex flex-col-reverse items-center p-2"
          >
            <div className={`text-6xl ${conditionColors[computer.ConditionRating]}`}>
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <div className="text-black font-semibold text-xl">
                PC-
              {computer.MachineNumber}
            </div>
          </div>
        ))}
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
