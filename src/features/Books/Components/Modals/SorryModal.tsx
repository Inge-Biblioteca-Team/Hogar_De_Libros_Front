import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
const SorryModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal  show={open} onClose={() => setOpen(false)}>
      <Modal.Header>Solicitud de préstamo libro infantil</Modal.Header>
      <Modal.Body className=" flex flex-col justify-center items-center">
        <figure className=" flex flex-col">
          <img
            src="https://img.freepik.com/fotos-premium/primer-plano-bebe-sentado-pila-libros-generativo-ai_902639-88938.jpg?w=996"
            alt="Lo sentimos"
            className=" w-full h-72"
          />
          <figcaption>
            <p>
              Lo sentimos esta sección se encuentra en desarrollo, agradecemos
              su espera.
            </p>
          </figcaption>
        </figure>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button onClick={() => setOpen(false)} color={"blue"}>
          Regresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SorryModal;
