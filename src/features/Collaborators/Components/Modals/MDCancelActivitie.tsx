import { Modal, ModalBody, Label, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import ModalFooters from "../../../../components/ModalFooters";
import { downType } from "../../../../Types/GlobalTypes";
import UseCancelColab from "../../Hooks/UseCancelColab";

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

  const { mutate: cancel, isLoading } = UseCancelColab();

  const onConfirm = (data: downType) => {
    cancel(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header className="dark:bg-neutral-900">Cancelar colaboración</Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
      <ModalBody className="dark:bg-[#2d2d2d]">
          <Label value="Razón de cancelación" />
          <Textarea
            rows={4}
            {...register("reason")}
            placeholder="Escriba la razón para cancelar la actividad"
            required
          />
        </ModalBody>
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default MDCancelActivitie;
