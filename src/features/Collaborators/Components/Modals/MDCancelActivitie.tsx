import { Modal, ModalBody, Label, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import ModalFooters from "../../../../components/ModalFooters";
import { downType } from "../../../../Types/GlobalTypes";
import UseRefueseColab from "../../Hooks/UseRefueseColab";

const MDCancelActivitie = ({
  setOpen,
  open,
  id,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  id: number;
}) => {
  const { register, reset, handleSubmit } = useForm<downType>({
    defaultValues: { Id: id.toString() },
  });

  const onClose = () => {
    setOpen(false);
    reset();
  };

  const { mutate: refuse } = UseRefueseColab();

  const onConfirm = (data: downType) => {
    refuse(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>Cancelar colaboración</Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <ModalBody>
          <Label value="Razón de cancelación" />
          <Textarea
            rows={4}
            {...register("reason")}
            placeholder="Escriba la razón del cancelar la actividad"
          />
        </ModalBody>
        <ModalFooters onClose={onClose} />
      </form>
    </Modal>
  );
};

export default MDCancelActivitie;
