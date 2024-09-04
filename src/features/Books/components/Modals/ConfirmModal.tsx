import { Modal, Button } from "flowbite-react";
import { Book } from "../../type/Book";

const ConfirmModal = ({
  isOpen,
  onConfirm,
  onCancel,
  Book,
  Accion,
}: {
  isOpen: boolean;
  Book: Book;
  onCancel: () => void;
  onConfirm: (book: Book) => void;
  Accion: string;
}) => {
  return (
    <Modal show={isOpen} onClose={onCancel}>
      <Modal.Header>Confirmar {Accion} Equipo </Modal.Header>
      <Modal.Body>
        <p>
          ¿Está seguro de que desea {Accion} este Libro?
          <br />
          <strong>Titulo:</strong>
          <span> {Book.Title}</span>
          <br />
          <strong>ISBN:</strong>
          <span> {Book.ISBN}</span>
          <br />
          <strong>Codigo de Signatura:</strong>
          <span> {Book.SignatureCode}</span>
          <br />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="bg-Bottoms text-white text-2xl rounded-lg px-2
    hover:bg-Bottoms-dark hover:scale-105
     max-sm:hidden"
          onClick={() => onConfirm(Book)}
        >
          Sí, estoy seguro
        </Button>
        <Button color="red" onClick={onCancel}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
