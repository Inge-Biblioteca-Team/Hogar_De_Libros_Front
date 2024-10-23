import { Card, Label } from "flowbite-react";
import { Book } from "../../Types/BooksTypes";
import { useState } from "react";
import LendingForm from "../Modals/LendingForm";

const ListCard = ({ book }: { book: Book }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Card
        onClick={() => setOpen(true)}
        className="w-full hover:scale-105"
        title="Click para solicitar préstamo"
      >
        <div className=" flex">
          <figure>
            <img
              src={book.Cover}
              alt=""
              className="h-40 w-40 rounded-lg shadow-lg"
            />
          </figure>
          <div className=" flex flex-col justify-between ml-4">
            <Label value={` Titulo: ${book.Title}`} />
            <Label value={` Autor: ${book.Author}`} />
            <Label
              value={` Año de publicación: ${
                book.PublishedYear || "Desconocido"
              }`}
            />
            <Label value={` ISBN: ${book.ISBN || "No posee"}`} />
            <Label
              value={` Código de signatura: ${
                book.SignatureCode || "No posee"
              }`}
            />
            <Label
              value={` Categoría de estante: ${
                book.ShelfCategory || "No posee"
              }`}
            />
          </div>
        </div>
      </Card>
      <LendingForm open={open} setOpen={setOpen} book={book} />
    </>
  );
};

export default ListCard;
