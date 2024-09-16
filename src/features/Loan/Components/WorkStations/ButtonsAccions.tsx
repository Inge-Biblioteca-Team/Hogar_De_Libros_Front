import { Button } from "flowbite-react";
import { useState } from "react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
import ModalewSWLoan from "./ModalewSWLoan";
import UseFinalizeSWLoan from "../../Hooks/Computers/UseFinalizeSWLoan";
import ModalMantenance from "./ModalewSWMantenance";
import UseReactiveSW from "../../Hooks/Computers/UseReactiveSW";

type ComputerStatus = {
  Status: string;
  MachineNumber: number;
};

const ButtonsAccions = ({ computer }: { computer: ComputerStatus }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [Mantenance, setMantenace] = useState<boolean>(false);

  const { mutate: finalizeLoan } = UseFinalizeSWLoan();
  const handleFinalizeLoan = () => {
    finalizeLoan(computer.MachineNumber);
  };

  const {mutate: reactive} = UseReactiveSW()

  const handleReactive = () =>{
    reactive(computer.MachineNumber);
  }

  return (
    <>
      <Button.Group>
        {computer.Status === "Disponible" && (
          <>
            <Button color="gray" onClick={() => setOpen(true)}>
              <HiUserCircle className="mr-3 h-4 w-4" />
              En Uso
            </Button>
            <Button color="gray" onClick={() => setMantenace(true)}>
              <HiAdjustments className="mr-3 h-4 w-4" />
              Mantenimiento
            </Button>
          </>
        )}

        {computer.Status === "En Uso" && (
          <Button color="gray" onClick={() => handleFinalizeLoan()}>
            <HiCloudDownload className="mr-3 h-4 w-4" />
            Disponible
          </Button>
        )}

        {computer.Status === "Mantenimiento" && (
          <Button color="gray" onClick={() => handleReactive()}>
            <HiAdjustments className="mr-3 h-4 w-4" />
            Terminar Mantenimiento
          </Button>
        )}
      </Button.Group>
      <ModalewSWLoan
        open={open}
        setOpen={setOpen}
        MNumber={computer.MachineNumber}
      />
      <ModalMantenance
        open={Mantenance}
        setOpen={setMantenace}
        MNumber={computer.MachineNumber}
      />
    </>
  );
};

export default ButtonsAccions;
