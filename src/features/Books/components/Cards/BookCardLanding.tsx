import { useNavigate } from "react-router-dom";
import { Book } from "../../type/Book";

const BookCardLanding = ({Book}: {Book:Book}) => {
  const navi = useNavigate()
  const Goto=()=>{
    navi(`/HogarDeLibros/CatalogoDeLibros/Libro/${Book.BookCode}`)
  }

  return (
    <>
        <img
          src={Book.Cover}
          alt="Portada del libro"
          className=" object-fill hover:shadow-md hover:drop-shadow-lg hover:shadow-blue-950 rounded-t-md h-96 w-80 
          max-sm:h-48 max-sm:rounded-md"
          onClick={Goto}
          />
        <figcaption className="p-2 text-center max-w-80 h-36 hidden">
          <span className="text-lg break-words max-w-80 max-sm:text-lg">{Book.Title}</span>
        </figcaption>
    </>
  );
};

export default BookCardLanding;
