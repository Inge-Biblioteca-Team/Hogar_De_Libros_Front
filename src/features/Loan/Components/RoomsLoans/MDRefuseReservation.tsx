import { Button, Modal, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Reserve } from "../../Types/RoomsReservations";

const MDRefuseReservation = ({
  open,
  setOpen,
  reserve,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  reserve: Reserve;
}) => {
  return (
    <Modal show={open} onClose={() => setOpen(false)} popup>
      <Modal.Body className="flex items-center justify-center flex-col">
        <div className="text-center mt-7">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        </div>
        <span>
          Ensta seguro que quiere rechazar la reserva de {reserve.name}
        </span>
        <Textarea className="mt-4" placeholder="Ingrese el motivo" rows={3} />
      </Modal.Body>
      <Modal.Footer className="flex items-center justify-center">
        <Button color={"failure"} tabIndex={2} onClick={() => setOpen(false)}>
          Regresar
        </Button>
        <Button color={"blue"}>Confirmar</Button>{" "}
      </Modal.Footer>
    </Modal>
  );
};

export default MDRefuseReservation;
