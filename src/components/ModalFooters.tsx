import { Button, Modal } from "flowbite-react";

const ModalFooters = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <Modal.Footer className=" flex items-center justify-center gap-3">
        <Button tabIndex={2} color="red" onClick={onClose}>
          Cancelar
        </Button>
        <Button color="blue" type="submit">
          Confirmar
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ModalFooters;
