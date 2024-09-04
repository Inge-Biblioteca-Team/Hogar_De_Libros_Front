import { useNavigate } from "react-router-dom"
import { List, ListItem } from "flowbite-react";
import { Book } from "../../type/Book";
import BtnReserve from "../BTN/BtnReserve";


const BookChildCardList = ({Book}: {Book:Book}) => {

  const navi = useNavigate()
  const Goto=()=>{
    navi(`/HogarDeLibros/CatalogoDeLibros/LibroI/${Book.BookCode}`)
  }

  return (
    <div className="flex items-center p-4 gap-5 shadow-lg rounded-md">
    <figure className="cursor-pointer" onClick={Goto}>
      <img
        src={Book.Cover}
        alt={`Portada del libro ${Book.Title}`}
        className="object-fill rounded-md h-72 w-48 hover:shadow-md hover:drop-shadow-lg hover:shadow-blue-950 max-sm:h-48 max-sm:rounded-md"
      />
    </figure>

    <div className="flex flex-col justify-between flex-1">
      <List className="space-y-2">
        <ListItem>
          <strong>{Book.Title}</strong>
        </ListItem>
        <ListItem>
          <strong>Autor:</strong> {Book.Author}
        </ListItem>
        <ListItem>
          <strong>Año de Publicación:</strong> {Book.PublishedYear}
        </ListItem>
        <ListItem>
          <strong>Editorial:</strong> {Book.Editorial}
        </ListItem>
        <ListItem>
          <strong>ISBN:</strong> {Book.ISBN}
        </ListItem>
      </List>
      <div className="mt-4">
        <BtnReserve Goto={Book.BookCode} Objetive="Solicitar" id={Book.BookCode} text="Solicitar Prestamo" />
      </div>
    </div>
  </div>
  )
}

export default BookChildCardList
