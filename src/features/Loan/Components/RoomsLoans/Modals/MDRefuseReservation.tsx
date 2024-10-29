import { Modal, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Reserve } from "../../../Types/RoomsReservations";
import ModalFooters from "../../../../../components/ModalFooters";

const MDRefuseReservation = ({
  open,
  setOpen,
  reserve,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  reserve: Reserve;
}) => {
  

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Modal show={open} onClose={onClose} popup size={"md"}>
      <form  >
        <Modal.Body className="flex items-center justify-center flex-col text-center">
          <div className="text-center mt-7">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          </div>
          <span>
            Está seguro que quiere rechazar la reserva de {reserve.name}
          </span>
          <Textarea className="mt-3" rows={4} placeholder="Motivo" required />
        </Modal.Body>
        <ModalFooters onClose={onClose} />
      </form>
    </Modal>
  );
};

export default MDRefuseReservation;
