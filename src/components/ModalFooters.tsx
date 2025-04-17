import { Button, Modal, Spinner } from "flowbite-react";

const ModalFooters = ({ onClose, isLoading }: { onClose: () => void, isLoading: boolean }) => {
  return (
    <>
      <Modal.Footer className="dark:bg-[#2d2d2d] flex bg-white lg:bg-transparent items-center justify-center gap-3">
        <Button
         title="Cancelar y regresar" tabIndex={2} color="red" onClick={onClose} disabled={isLoading}>
          Cancelar
        </Button>
        <Button title="Confirmar" color="blue" type="submit" disabled={isLoading}>
        {isLoading ? (
          <><Spinner aria-label="Spinner button example" size="sm" /> <p className="pl-3">Cargando...</p></>
        ) : (
          "Confirmar"
        )}
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ModalFooters;
