import { Button, Card, Label, Popover } from "flowbite-react";
import { Book } from "../../Types/BooksTypes";
import LendingForm from "../Modals/LendingForm";
import { useContext, useState } from "react";
import UserContext from "../../../../Context/UserContext/UserContext";

const BookCard = ({ book }: { book: Book }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { isLogged } = useContext(UserContext);
  return (
    <>
      <Popover
        trigger="hover"
        placement="right"
        content={
          <Card className=" h-56 p0 w-64 md:w-full">
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
        <figure className="md:w-full md:pl-2 md:pr-2">
          <img
            src={book.Cover}
            alt={book.Title}
            className="md:w-full rounded-t-2xl h-80 w-52"
          />
          <figcaption className="w-full">
            {isLogged && (
              <Button
                className="w-full rounded-none rounded-b-md"
                onClick={() => setOpen(true)}
                color={"gray"}
              >
                Reservar ahora
              </Button>
            )}
          </figcaption>
        </figure>
      </Popover>

      <LendingForm open={open} setOpen={setOpen} book={book} />
    </>
  );
};

export default BookCard;
