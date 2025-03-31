import { Modal, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import ModalFooters from "../../../../components/ModalFooters";
import { downType } from "../../../../Types/GlobalTypes";
import UseDownFrien from "../../Hooks/UseDownFrien";

const MDDownFriend = ({
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

  const { mutate: rejectFriend, isLoading } = UseDownFrien();

  const handleConfirm = (data: downType) => {
    rejectFriend(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };
  return (
    <Modal dismissible show={open} onClose={onClose}>
      <form onSubmit={handleSubmit(handleConfirm)}>
        <Modal.Body className="dark:bg-[#2d2d2d] text-center">
          <div className="text-center mt-7">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          </div>
          <span>¿Está seguro de dar de baja este amigo?</span>
          <br />
          <span>Esta acción no es reversible.</span>
          <Textarea
            cols={4}
            className="mt-3"
            {...register("reason")}
            placeholder="Motivo de la baja"
            required
          />
        </Modal.Body>
        <ModalFooters onClose={onClose} isLoading={isLoading}/>
      </form>
    </Modal>
  );
};

export default MDDownFriend;
