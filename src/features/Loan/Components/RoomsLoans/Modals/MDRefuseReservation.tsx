import { Button, Modal, Spinner, Textarea } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Reserve } from "../../../Types/RoomsReservations";
import UseRefuese from "../../../Hooks/Rooms/UseRefuese";

const MDRefuseReservation = ({
  open,
  setOpen,
  reserve,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  reserve: Reserve;
}) => {
  const { mutate: refuse, isLoading } = UseRefuese();

  const onConfirm = () => {
    refuse(
      { acction: "Refuse", id: reserve.rommReservationId },
      {
        onSuccess: () => setOpen(false),
      }
    );
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Modal show={open} onClose={onClose} popup size={"md"}>
      <form>
        <Modal.Body className="flex items-center justify-center flex-col text-center">
          <div className="text-center mt-7">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          </div>
          <span>
          ¿Está seguro de que quiere rechazar la reserva de {reserve.name}?
          </span>
          <Textarea className="mt-3" rows={4} placeholder="Motivo" required />
        </Modal.Body>
        <Modal.Footer className=" flex items-center justify-center">
          <Button color={"red"} onClick={onClose} tabIndex={2} disabled={isLoading}>
            Cancelar
          </Button>
          <Button color={"blue"} onClick={onConfirm} disabled={isLoading}>
          {isLoading ? (
          <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
        ) : (
          "Confirmar"
        )}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default MDRefuseReservation;
