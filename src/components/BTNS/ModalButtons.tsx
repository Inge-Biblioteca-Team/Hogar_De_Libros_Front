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
        <Button title="Cancelar y regresar" color={"red"} onClick={() => setOpen(false)}>
          Regresar
        </Button>
        <Button title="Confirmar" color={"blue"} type="submit">
          Confirmar
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ModalButtons;
