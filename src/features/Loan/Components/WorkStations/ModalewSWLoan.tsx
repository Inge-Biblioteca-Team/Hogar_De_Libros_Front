import { Button, Label, Modal, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { NewWSLoan } from "../../Types/ComputerLoan";
import UseGenerateWSLoan from "../../Hooks/Computers/UseGenerateWSLoan";

const ModalewSWLoan = ({
  MNumber,
  open,
  setOpen,
}: {
  MNumber: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, setValue, handleSubmit } = useForm<NewWSLoan>();

  setValue("MachineNumber", MNumber);

  const { mutate } = UseGenerateWSLoan();

  const onSubmit = (data: NewWSLoan) => {
    mutate(data, {
      onSuccess: () => {
        console.log("Loan created successfully");
        setOpen(false);
      },
    });
  };

  return (
    <Modal show={open} onClose={() => setOpen(false)} className="text-center">
      <Modal.Header>
        <h5>Nuevo Prestamo de Equipo {MNumber} </h5>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Label htmlFor="UserName">Nombre de Usuario</Label>
          <TextInput
            className=""
            type="text"
            required
            {...register("UserName")}
          />
          <Label htmlFor="UserName">Cedula del Administrador</Label>
          <TextInput
            className=""
            type="text"
            required
            {...register("cedula")}
          />
        </Modal.Body>
        <Modal.Footer className=" w-full flex items-center justify-center">
          <Button
            type="button"
            color={"failure"}
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
          <Button type="submit" color={"success"}>
            Confirmar
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ModalewSWLoan;
