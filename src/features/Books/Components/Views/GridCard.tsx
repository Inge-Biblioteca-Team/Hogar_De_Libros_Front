import { Button, Card, Label, Popover } from "flowbite-react";
import { Book } from "../../Types/BooksTypes";
import { useState } from "react";
import LendingForm from "../Modals/LendingForm";
import SorryModal from "../Modals/SorryModal";

const GridCard = ({ book, inf }: { book: Book; inf: boolean }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Popover
        trigger="hover"
        placement="right"
        content={
          <Card className=" h-56 p0 w-64">
            <div className=" flex flex-col justify-between ml-4">
              <div className=" line-clamp-2">
                <Label value={` Titulo: ${book.Title}`} />
              </div>
              <div className=" line-clamp-2">
                <Label value={` Autor: ${book.Author || "Desconocido"}`} />
              </div>
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
            </div>
          </Card>
        }
      >
        <figure className=" hover:scale-105">
          <img
            src={book.Cover}
            alt={book.Title}
            className=" rounded-md h-52 w-52 rounded-b-none"
          />
          <figcaption>
            <Button
              onClick={() => setOpen(true)}
              className=" rounded-t-none w-full"
              size={"sm"}
              color={"gray"}
            >
              Reserva ahora
            </Button>
          </figcaption>
        </figure>
      </Popover>
      {inf ? (
        <SorryModal open={open} setOpen={setOpen}/>
      ) : (
        <LendingForm open={open} setOpen={setOpen} book={book} />
      )}
    </>
  );
};

export default GridCard;
