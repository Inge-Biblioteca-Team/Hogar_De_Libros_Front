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
      <Modal.Header>{Accion} Libro </Modal.Header>
      <Modal.Body>
        <p>
          ¿Está seguro de que desea {Accion} este Libro?
          <br />
          <strong>Título:</strong>
          <span> {Book.Title}</span>
          <br />
          <strong>Editorial:</strong>
          <span> {Book.Editorial}</span>
          <br />
          <strong>ISBN:</strong>
          <span> {Book.ISBN == "" ? "No Presenta" : Book.ISBN}</span>
          <br />
          <strong>Código de Signatura:</strong>
          <span>
            {" "}
            {Book.SignatureCode == "" ? "Desconocido" : Book.SignatureCode}
          </span>
          <br />
          <strong>Código de Inscripción:</strong>
          <span>
            {" "}
            {Book.InscriptionCode == "" ? "No Posee" : Book.InscriptionCode}
          </span>
          <br />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button color="red" onClick={onCancel}>
          Cancelar
        </Button>
        <Button
          className="bg-Bottoms text-white text-2xl rounded-lg px-2
    hover:bg-Bottoms-dark hover:scale-105
     max-sm:hidden"
          onClick={() => onConfirm(Book)}
        >
          Sí, estoy seguro
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
