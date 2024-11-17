import { Button, Label, Modal } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Book } from "../../Types/BooksTypes";
import { getConditionStatusText } from "../../../../components/Maps/Condition";
import LendingAdminForm from "./LendingAdminForm";

const ViewChildrenBook = ({
  open,
  setOpen,
  book,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  book: Book;
}) => {
  const onClose = () => {
    setOpen(false);
  };

  const [loan, openLoan] = useState<boolean>(false);

  return (
    <>
      <Modal onClose={onClose} show={open}>
        <Modal.Header>Información del Libro</Modal.Header>
        <Modal.Body className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
          <figure>
            <img
              title="Click para editar la imagen"
              className=" rounded-md"
              style={{ height: "26.5rem", width: "100%" }}
              src={book.Cover}
              alt=""
            />
          </figure>
          <div className=" flex flex-col lg:justify-between col-span-2">
            <Label value={`Titulo: ${book.Title}`} />
            <Label value={`Autor: ${book.Author}`} />
            <Label value={`Editorial: ${book.Editorial || "No Posee"}`} />
            <Label
              value={`Año de publicación: ${book.PublishedYear || "No Posee"}`}
            />
            <Label value={`ISBN: ${book.ISBN || "No Posee"}`} />
            <Label
              value={`Código de signatura: ${book.signatureCode || "No Posee"}`}
            />
            <Label
              value={`Código de inscripción: ${
                book.InscriptionCode || "No Posee"
              }`}
            />
            <Label
              value={`Observaciones: ${book.Observations || "No Posee"}`}
            />
            <Label
              value={`Estado del libro: ${getConditionStatusText(
                book.BookConditionRating
              )}`}
            />
            <Label value={`Categoría de estante: ${book.ShelfCategory}`} />
            {book.ReserveBook && <Label value={"Libro de reserva"} />}
          </div>
        </Modal.Body>
        <Modal.Footer className=" flex items-center justify-center">
          {!book.Status && (
            <Button onClick={onClose} color={"blue"}>
              Regresar
            </Button>
          )}
          {book.Status && (
            <Button onClick={onClose} color={"red"}>
              Cerrar
            </Button>
          )}
          {book.Status && <Button onClick={()=>openLoan(true)} color={"blue"}>Generar préstamo</Button>}
        </Modal.Footer>
      </Modal>
      <LendingAdminForm book={book} open={loan} setOpen={openLoan} />
    </>
  );
};

export default ViewChildrenBook;
