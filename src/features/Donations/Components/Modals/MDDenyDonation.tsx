import { Modal, Textarea } from "flowbite-react";
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

  const { mutate: refuse } = UseRefuseDonation();

  const onConfirm = (data: downType) => {
    refuse(data, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header></Modal.Header>
      <form onSubmit={handleSubmit(onConfirm)}>
        <Modal.Body>
          <Textarea rows={4} {...register("reason")} />
        </Modal.Body>
        <ModalFooters onClose={onClose} />
      </form>
    </Modal>
  );
};

export default MDDenyDonation;
