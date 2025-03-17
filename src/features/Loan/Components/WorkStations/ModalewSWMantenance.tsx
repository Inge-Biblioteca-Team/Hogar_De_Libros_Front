import { Label, Modal, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { NewWSMantenance } from "../../Types/ComputerLoan";
import NewSetMaintenance from "../../Hooks/Computers/NewSetMaintenance";
import ModalFooters from "../../../../components/ModalFooters";

const ModalMantenance = ({
  MNumber,
  open,
  setOpen,
}: {
  MNumber: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const {handleSubmit} = useForm<NewWSMantenance>();

 

  const { mutate, isLoading } = NewSetMaintenance();

  const [inChange, setInCharge] = useState("");
  const [Location, setLocacion] = useState("");

  const onSubmit = () => {
    const combinedData = `Realizado por: ${inChange}; En: ${Location}`;
    mutate(
      {
        MachineNumber: MNumber,
        location: combinedData,
        status: "Mantenimiento",
      },
      {
        onSuccess: () => {
          setOpen(false);
          setLocacion("")
          setInCharge("")
        },
      }
    );
  };

  const onClose = () => {
    setOpen(false);
    setLocacion("")
    setInCharge("")
  };

  return (
    <Modal
      dismissible
      show={open}
      onClose={() => setOpen(false)}
      className="text-center"
    >
      <Modal.Header>
        <h5>Mantenimiento de equipo {MNumber} </h5>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Label htmlFor="UserName">Realizado por</Label>
          <TextInput
            className="mb-5"
            type="text"
            required
            onChange={(event) => {
              setInCharge(event.target.value);
            }}
          />
          <Label htmlFor="UserName">Ubicación del equipo</Label>
          <TextInput
            className=""
            type="text"
            required
            onChange={(event) => {
              setLocacion(event.target.value);
            }}
          />
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default ModalMantenance;
