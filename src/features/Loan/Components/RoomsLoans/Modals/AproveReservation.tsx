import { Button, Modal } from "flowbite-react";
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

  const { mutate: refuse } = UseRefuese();

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
              <Button color="red" onClick={onCancel}>
                Volver
              </Button>
              <Button color="blue" onClick={onConfirm}>
                Confirmar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AproveReservation;
