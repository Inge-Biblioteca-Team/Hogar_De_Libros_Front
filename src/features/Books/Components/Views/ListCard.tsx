import { Button, Card, Label } from "flowbite-react";
import { Book } from "../../Types/BooksTypes";
import { useState } from "react";
import LendingForm from "../Modals/LendingForm";

const ListCard = ({ book }: { book: Book }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Card
        className="w-full h-full hover:scale-105"
      >
        <div className="grid  grid-cols-2 lg:flex">
          <figure>
            <img
              src={book.Cover}
              alt=""
              className=" h-full lg:h-52 w-40 rounded-lg shadow-lg"
            />
          </figure>
          <div className=" flex flex-col justify-between ml-4 gap-2">
            <Label className="line-clamp-4" value={` Titulo: ${book.Title}`} />
            <Label className="line-clamp-4" value={` Autor: ${book.Author}`} />
            <Label 
              value={` Año de publicación: ${
                book.PublishedYear || "Desconocido"
              }`}
            />
            <Label value={` ISBN: ${book.ISBN || "No posee"}`} />
            <Label
              value={` Código de signatura: ${
                book.signatureCode || "No posee"
              }`}
            />
            <Label
              value={` Categoría de estante: ${
                book.ShelfCategory || "No posee"
              }`}
            />
            <Button className="w-32 lg:w-40" color={"blue"} size={"sm"}
            onClick={() => setOpen(true)}>
              Reserva ahora
            </Button>
          </div>
        </div>
      </Card>
      <LendingForm open={open} setOpen={setOpen} book={book} />
    </>
  );
};

export default ListCard;
