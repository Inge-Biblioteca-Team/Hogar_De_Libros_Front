import { Label, Modal, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import ModalFooters from "../../../../components/ModalFooters";
import { downType } from "../../../../Types/GlobalTypes";
import UseConfirmDonation from "../../Hooks/UseConfirmDonation";

const MDConfirmRecepcion = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: number;
}) => {
  const onClose = () => {
    setOpen(false);
    reset();
  };

  const { handleSubmit, register, reset } = useForm<downType>({
    defaultValues: { Id: id.toString() },
  });

  const { mutate: confirm, isLoading } = UseConfirmDonation();

  const onConfirm = (data: downType) => {
    confirm(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal  show={open} onClose={onClose} size={"md"}>
      <Modal.Header className="dark:bg-neutral-900">Confirmar recepción</Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className="dark:bg-[#2d2d2d]">
          <div>
            <Label value="Anotaciones extras" />
            <Textarea
              rows={4}
              {...register("reason")}
              required
              placeholder="Ej. Tiene algún daño no especificado previamente"
            />
          </div>
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default MDConfirmRecepcion;
