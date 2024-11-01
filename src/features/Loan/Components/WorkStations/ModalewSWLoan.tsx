import { Label, Modal, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { NewWSLoan } from "../../Types/ComputerLoan";
import UseGenerateWSLoan from "../../Hooks/Computers/UseGenerateWSLoan";
import ModalFooters from "../../../../components/ModalFooters";

const ModalewSWLoan = ({
  MNumber,
  open,
  setOpen,
}: {
  MNumber: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, setValue, handleSubmit, reset } = useForm<NewWSLoan>();

  setValue("MachineNumber", MNumber);

  const { mutate } = UseGenerateWSLoan();

  const onSubmit = (data: NewWSLoan) => {
    mutate(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  const onClose = () => {
    setOpen(false);
    reset();
  };

  return (
    <Modal show={open} onClose={onClose} className="text-center">
      <Modal.Header>
        <h5>Nuevo préstamo de Equipo {MNumber} </h5>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Label htmlFor="UserName">Nombre</Label>
          <TextInput
            placeholder="Tu nombre completo"
            className=" mb-4"
            type="text"
            required
            {...register("UserName")}
          />
          <Label htmlFor="UserName">Numero de cédula</Label>
          <TextInput
            placeholder="Numero de cédula sin guiones ni espacios"
            className=""
            type="number"
            pattern="[0-9]*"
            required
            {...register("cedula")}
          />
        </Modal.Body>
        <ModalFooters onClose={onClose} />
      </form>
    </Modal>
  );
};

export default ModalewSWLoan;
