import { useNavigate } from "react-router-dom";
import { Book } from "../type/Book";

const BookCard = ({Book}: {Book:Book}) => {
  const navigate = useNavigate();
  const handleBookClick = () => {
    navigate(`/book/${Book.id}`, { state: { Book } });
  }
  return (
    <>
        <img 
          onClick={handleBookClick}
          src={Book.Cover}
          alt="Portada del libro"
          className=" h-72 w-64  object-cover hover:shadow-md hover:drop-shadow-lg hover:shadow-blue-950 rounded-t-md"
          />
        <figcaption className="p-2 text-center max-w-80 h-36 hidden">
          <span className="text-lg break-words max-w-80 max-sm:text-lg">{Book.Title}</span>
        </figcaption>
    </>
  );
};

export default BookCard;

//! Cuando tenga las pantallas de libros independientes meter el img en un <s>