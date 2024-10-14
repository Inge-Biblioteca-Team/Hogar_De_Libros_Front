import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

const ModalButtons = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color={"failure"} onClick={() => setOpen(false)}>
          Regresar
        </Button>
        <Button color={"blue"} type="submit">
          Confirmar
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ModalButtons;
