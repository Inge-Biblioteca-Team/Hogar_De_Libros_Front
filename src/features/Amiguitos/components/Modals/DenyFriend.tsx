import { Modal, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseRefuseFriend from "../../Hooks/UseRefuseFriend";
import ModalFooters from "../../../../components/ModalFooters";
import { useForm } from "react-hook-form";
import { downType } from "../../../../Types/GlobalTypes";

const DenyFriend = ({
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

  const { register, reset, handleSubmit } = useForm<downType>({
    defaultValues: {
      Id: id.toString(),
    },
  });

  const { mutate: rejectFriend, isLoading } = UseRefuseFriend();

  const handleConfirm = (data: downType) => {
    rejectFriend(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Modal show={open} onClose={onClose} popup size="md">
      <form onSubmit={handleSubmit(handleConfirm)}>
        <Modal.Body className="dark:bg-[#2d2d2d] text-center">
          <div className="text-center mt-7">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          </div>
          <span>¿Está seguro de rechazar la solicitud de amigo?</span>
          <br />
          <span>Esta acción no es reversible.</span>
          <Textarea cols={4} 
          className="mt-3"
          {...register("reason")}
          placeholder="Motivo de rechazo"
          required />
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default DenyFriend;
