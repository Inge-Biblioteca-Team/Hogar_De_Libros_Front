import { Button, Card, Label, Popover } from "flowbite-react";
import { Book } from "../../Types/BooksTypes";
import { useState } from "react";
import LendingForm from "../Modals/LendingForm";
import LendingChild from "../../../ChildrenBooks/Components/Modals/LendingChild";
import { BookC } from "../../../ChildrenBooks/Types/BooksChildrensTypes";

type BookUnion = Book | BookC;

const GridCard = ({ book, inf }: { book: Book; inf: boolean }) => {
  const [open, setOpen] = useState<boolean>(false);
  function getSignatureCode(book: BookUnion): string {
    if ("signatureCode" in book) return book.signatureCode;
    if ("SignatureCode" in book) return book.SignatureCode;
    return "No posee";
  }

  return (
    <>
      <Popover
        trigger="hover"
        placement="right"
        content={
          <Card className=" h-56 p0 w-64">
            <div className=" flex flex-col justify-between ml-4">
              <div className=" line-clamp-2">
                <Label value={` Título: ${book.Title}`} />
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
                value={` Código de signatura: ${getSignatureCode(book)}`}
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
        <LendingChild
          open={open}
          setOpen={setOpen}
          book={{ ...book, SignatureCode: getSignatureCode(book) }}
        />
      ) : (
        <LendingForm open={open} setOpen={setOpen} book={book} />
      )}
    </>
  );
};

export default GridCard;
