import { Book } from "../type/Book";

const BookCard = ({Book}: {Book:Book}) => {
  return (
    <>
        <img
          src={Book.cover}
          alt="Portada del libro"
          className=" h-96 w-80 object-fill hover:shadow-md hover:drop-shadow-lg hover:shadow-blue-950 rounded-t-md"
        />
        <figcaption className="p-2 text-center max-w-80">
          <span className=" text-lg break-words">{Book.title}</span>
        </figcaption>
    </>
  );
};

export default BookCard;
