import { Button, Label, Modal, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { NewWSMantenance } from "../../Types/ComputerLoan";
import NewSetMaintenance from "../../Hooks/Computers/NewSetMaintenance";

const ModalMantenance = ({
  MNumber,
  open,
  setOpen,
}: {
  MNumber: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, setValue, handleSubmit } = useForm<NewWSMantenance>();

  setValue("machineNumber", MNumber);

  const { mutate } = NewSetMaintenance();

  const onSubmit = (data: NewWSMantenance) => {
    mutate(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };


  return (
    <Modal dismissible show={open} onClose={() => setOpen(false)} className="text-center" >
      <Modal.Header>
        <h5>Mantenimiento de Equipo {MNumber} </h5>
      </Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Label htmlFor="UserName">Realizado Por</Label>
          <TextInput className="" type="text" required {...register("userName")} />
          <Label htmlFor="UserName">Ubicacion del equipo</Label>
          <TextInput className="" type="text" required {...register("location")} />
        </Modal.Body>
        <Modal.Footer className=" w-full flex items-center justify-center">
          <Button type="button" color={"failure"} onClick={() => setOpen(false)} >Cancelar</Button>
          <Button type="submit" color={"blue"}>Confirmar</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ModalMantenance;
