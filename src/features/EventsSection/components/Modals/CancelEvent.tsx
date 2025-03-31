import { Button, Modal, Spinner } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Events } from "../../types/Events";
import UseCancelEvent from "../../Hooks/UseCancelEvent";

const CancelEvent = ({
  open,
  setOpen,
  event,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  event: Events;
}) => {
  const { mutate: PatchStatus, isLoading } = UseCancelEvent();
  const handleConfirm = () => {
    PatchStatus(event.EventId, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal dismissible show={open} onClose={() => setOpen(false)} popup size={"md"}>
      <Modal.Body className="dark:bg-[#2d2d2d] text-center">
        <div className="text-center mt-7">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        </div>
        <span>
          ¿Está seguro de cancelar el evento{" "}
          <strong className=" font-bold">{event.Title}</strong>?
        </span>
        <br />
        <span>Esta acción no es reversible!!!</span>
      </Modal.Body>
      <Modal.Footer className="dark:bg-[#2d2d2d] flex items-center justify-center">
        <Button color={"red"} onClick={() => setOpen(false)} disabled={isLoading}>
          Cancelar
        </Button>
        <Button color={"blue"} onClick={handleConfirm} disabled={isLoading}>
        {isLoading ? (
          <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
        ) : (
          "Confirmar"
        )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CancelEvent;
