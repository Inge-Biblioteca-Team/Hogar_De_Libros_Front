import { Button, Label, Modal } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { BookC } from "../../Types/BooksChildrensTypes";
import { getConditionStatusText } from "../../../../components/Maps/Condition";
import LendingAdminForm from "./LendingAdminForm";

const ViewChildrenBook = ({
  open,
  setOpen,
  book,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  book: BookC;
}) => {
  const onClose = () => {
    setOpen(false);
  };

  const [openL, setOpenL] = useState<boolean>(false);

  return (
    <Modal dismissible onClose={onClose} show={open}>
      <Modal.Header className="dark:bg-neutral-900">
        Información del Libro
      </Modal.Header>
      <Modal.Body className="dark:bg-[#2d2d2d] grid grid-cols-1 lg:grid-cols-3 gap-4">
        <figure>
          <img
            title="Click para editar la imagen"
            className=" rounded-md"
            style={{ height: "26.5rem", width: "100%" }}
            src={book.Cover}
            alt=""
          />
        </figure>
        <div className=" flex flex-col justify-between col-span-2">
          <Label value={`Título: ${book.Title}`} />
          <Label value={`Autor: ${book.Author}`} />
          <Label value={`Editorial: ${book.Editorial || "No Posee"}`} />
          <Label
            value={`Año de publicación: ${book.PublishedYear || "No Posee"}`}
          />
          <Label value={`ISBN: ${book.ISBN || "No Posee"}`} />
          <Label
            value={`Código de signatura: ${book.SignatureCode || "No Posee"}`}
          />
          <Label
            value={`Código de inscripción: ${
              book.InscriptionCode || "No Posee"
            }`}
          />
          <Label value={`Observaciones: ${book.Observations || "No Posee"}`} />
          <Label
            value={`Estado del libro: ${getConditionStatusText(
              book.BookConditionRating
            )}`}
          />
          <Label value={`Categoría de estante: ${book.ShelfCategory}`} />
          {book.ReserveBook && <Label value={"Libro de reserva"} />}
        </div>
      </Modal.Body>
      <Modal.Footer className="dark:bg-[#2d2d2d] flex items-center justify-center">
        <Button color={"red"} onClick={() => setOpen(false)}>
          Regresar
        </Button>
        <Button color={"blue"} onClick={() => setOpenL(true)}>
          Generar prestamo
        </Button>
      </Modal.Footer>
      <LendingAdminForm open={openL} setOpen={setOpenL} book={book} />
    </Modal>
  );
};

export default ViewChildrenBook;
