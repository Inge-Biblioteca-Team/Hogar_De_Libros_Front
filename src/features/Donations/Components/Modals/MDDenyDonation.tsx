import { Label, Modal, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import ModalFooters from "../../../../components/ModalFooters";
import { downType } from "../../../../Types/GlobalTypes";
import UseRefuseDonation from "../../Hooks/UseRefuseDonation";
import { useForm } from "react-hook-form";

const MDDenyDonation = ({
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

  const { mutate: refuse, isLoading } = UseRefuseDonation();

  const onConfirm = (data: downType) => {
    refuse(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal dismissible show={open} onClose={onClose} popup size={"md"}>
      <Modal.Header className="dark:bg-neutral-900">
      <span>Rechazar la donación</span>
      </Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body className="dark:bg-[#2d2d2d] flex flex-col gap-4">
          <span>¿Está seguro de rechazar la donación?</span>
          <div>
            <Label value="Razón de rechazo" />
            <Textarea
              rows={4}
              {...register("reason")}
              required
              placeholder="Ej. No cumple con los requisitos de donación"
            />
          </div>
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default MDDenyDonation;
