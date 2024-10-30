import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import UseAproveDonation from "../../Hooks/UseAproveDonation";

const MDAproveDonation = ({
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
  };

  const { mutate: aprove } = UseAproveDonation();

  const onConfirm = (id: number) => {
    aprove(id, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal show={open} onClose={onClose} popup size={"md"}>
      <Modal.Header></Modal.Header>
      <Modal.Body className=" flex justify-center items-center">
        <span className=" text-center">
          Confirmar aprobación de la donación
        </span>{" "}
      </Modal.Body>
      <Modal.Footer className=" flex justify-center items-center">
        <Button color={"red"} onClick={onClose}>
          Cancelar
        </Button>
        <Button color={"blue"} onClick={() => onConfirm(id)}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDAproveDonation;
