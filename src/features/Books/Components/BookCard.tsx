import { Book } from "../Types/BooksTypes";
import { useState } from "react";
import LendingForm from "./Modals/LendingForm";

const BookCard = ({Book}: {Book:Book}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
        <img
          onClick={() => setOpen(true)}
          src={Book.Cover}
          alt="Portada del libro"
          className=" object-fill hover:shadow-md hover:drop-shadow-lg hover:shadow-blue-950 rounded-t-md h-96 w-80 
          max-sm:h-48 max-sm:rounded-md"
          />
        <figcaption className="p-2 text-center max-w-80 h-36 hidden">
          <span className="text-lg break-words max-w-80 max-sm:text-lg">{Book.Title}</span>
        </figcaption>
        <LendingForm open={open} setOpen={setOpen} book={Book} />
    </>
  );
};

export default BookCard;