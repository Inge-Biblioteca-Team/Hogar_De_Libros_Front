import { useNavigate } from "react-router-dom"
import { Book } from "../../type/Book"
const BookCard = ({Book}: {Book:Book}) => {

  const navi = useNavigate()
  const Goto=()=>{
    navi(`/HogarDeLibros/CatalogoDeLibros/Libro/${Book.BookCode}`)
  }

  return (
       <figure className=" shadow-xl">
        <img
          src={Book.Cover}
          alt="Portada del libro"
          className=" object-fill rounded-md h-72 w-72
          hover:shadow-md hover:drop-shadow-lg hover:shadow-blue-950  
          max-sm:h-48 max-sm:rounded-md"
          onClick={Goto}
          />
    </figure>
  )
}

export default BookCard
