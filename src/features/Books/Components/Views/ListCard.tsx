import { Button, Card, Label } from "flowbite-react";
import { Book } from "../../Types/BooksTypes";
import { useState } from "react";
import LendingForm from "../Modals/LendingForm";
import { BookC } from "../../../ChildrenBooks/Types/BooksChildrensTypes";
import LendingChild from "../../../ChildrenBooks/Components/Modals/LendingChild";

type BookUnion = Book | BookC;

const ListCard = ({ book, inf }: { book: Book; inf: boolean }) => {
  const [open, setOpen] = useState<boolean>(false);
  function getSignatureCode(book: BookUnion): string {
    if ("signatureCode" in book) return book.signatureCode;
    if ("SignatureCode" in book) return book.SignatureCode;
    return "No posee";
  }

  return (
    <>
      <Card className="w-full h-full hover:scale-105">
        <div className="grid  grid-cols-2 lg:flex">
          <figure>
            <img
              src={book.Cover}
              alt=""
              className=" h-full lg:h-52 w-40 rounded-lg shadow-lg"
            />
          </figure>
          <div className=" flex flex-col justify-between ml-4 gap-2">
            <Label className="line-clamp-4" value={` Título: ${book.Title}`} />
            <Label className="line-clamp-4" value={` Autor: ${book.Author}`} />
            <Label
              value={` Año de publicación: ${
                book.PublishedYear || "Desconocido"
              }`}
            />
            <Label value={` ISBN: ${book.ISBN || "No posee"}`} />
            <Label value={` Código de signatura: ${getSignatureCode(book)}`} />
            <Label
              value={` Categoría de estante: ${
                book.ShelfCategory || "No posee"
              }`}
            />
            <Button
              className="dark:bg-[#2d2d2d] w-32 lg:w-40"
              color={"blue"}
              size={"sm"}
              onClick={() => setOpen(true)}
            >
              Reserva ahora
            </Button>
          </div>
        </div>
      </Card>
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

export default ListCard;
