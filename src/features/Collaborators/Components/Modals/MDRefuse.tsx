import { Label, Modal, ModalBody, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import ModalFooters from "../../../../components/ModalFooters";
import UseRefueseColab from "../../Hooks/UseRefueseColab";
import { downType } from "../../../../Types/GlobalTypes";

const MDRefuse = ({
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

  const { mutate: refuse, isLoading } = UseRefueseColab();

  const onConfirm = (data: downType) => {
    refuse(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal dismissible show={open} onClose={onClose}>
      <Modal.Header className="dark:bg-neutral-900">Rechazar colaboración</Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <ModalBody className="dark:bg-[#2d2d2d]">
          <Label value="Razón de rechazo" />
          <Textarea
            rows={4}
            {...register("reason")}
            placeholder="Escriba la razón de rechazo de la solicitud"
            required
          />
        </ModalBody>
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default MDRefuse;
