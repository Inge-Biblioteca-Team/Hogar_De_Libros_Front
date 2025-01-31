import { Button, Modal, Spinner } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import UseRefuese from "../../../Hooks/Rooms/UseRefuese";

const AproveReservation = ({
  open,
  setOpen,
  ID,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  ID: number;
}) => {
  const onCancel = () => {
    setOpen(false);
  };

  const { mutate: refuse, isLoading } = UseRefuese();

  const onConfirm = () => {
    refuse(
      { acction: "Aprove", id: ID },
      {
        onSuccess: () => setOpen(false),
      }
    );
  };
  return (
    <>
      <Modal show={open} popup onClose={onCancel} size={"sm"}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3>Está Seguro de aprobar la solicitud de préstamo</h3>
            <div className="flex justify-center gap-4 mt-10">
              <Button color="red" onClick={onCancel} disabled={isLoading}>
                Volver
              </Button>
              <Button color="blue" onClick={onConfirm} disabled={isLoading}>
              {isLoading ? (
          <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
        ) : (
          "Confirmar"
        )}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AproveReservation;
