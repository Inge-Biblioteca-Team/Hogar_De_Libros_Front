import { Button, Modal, ModalBody } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import UseAproveColab from "../../Hooks/UseAproveColab";

const MDAproved = ({
  setOpen,
  open,
  id,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  id: number;
}) => {
  const onClose = () => {
    setOpen(false);
  };

  const { mutate: aprove } = UseAproveColab();

  const onConfirm = (Id: number) => {
    aprove(Id, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal dismissible show={open} onClose={onClose} popup size={"sm"}>
      <ModalBody className=" flex justify-center items-center mt-12">
        <span className=" text-2xl">Aprobar colaboración</span>
      </ModalBody>
      <Modal.Footer className=" flex items-center justify-center">
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

export default MDAproved;
