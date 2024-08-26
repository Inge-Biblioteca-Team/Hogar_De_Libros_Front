import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { GetBookById, GetBooks } from "../services/SvBooks";
import { Book } from "../type/Book";
import BookCard from "../components/BookCard";
import BtnReserve from "../components/BtnReserve";
import {
  BooksRoute,
  CurrentRoute,
  HomeRoute,
  SpecialRoute,
} from "../components/Redirections";
import { Breadcrumb } from "flowbite-react";

const BookInformation = () => {
  const { id } = useParams<{ id?: string }>();

  const {
    data: book,
    error,
    isLoading,
  } = useQuery<Book, Error>(
    ["book", id],
    () => {
      if (!id) {
        throw new Error("Error No existe ID de libro para buscar");
      }
      return GetBookById(id);
    },
    { enabled: !!id }
  );
  const navi = useNavigate();
  const Goto = () => {
    navi(`/HogarDeLibros/CatalogoDeLibros/Libro/Solicitud/${id}`);
  };

  const { data: books } = useQuery<Book[], Error>(["FreeBooks"], GetBooks);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error:{error.message}</span>;

  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example">
        <HomeRoute />
        <BooksRoute />
        {book?.ShelfCategory && <SpecialRoute FinalPath={book.ShelfCategory} />}
        {book?.Title && <CurrentRoute CurrentPage={book.Title} />}
      </Breadcrumb>
      <div
        className="w-full grid pt-2"
        style={{ gridTemplateColumns: "25% 42% 33%" }}
      >
        <figure className="m-4 flex justify-center items-center shadow-2xl">
          <img
            src={book?.Cover}
            alt={book?.Title}
            className=" object-fill rounded-md"
            style={{ height: "78vh" }}
          />
        </figure>
        <span className="flex flex-col justify-center text-2xl gap-2 ml-4  ">
          <strong>Titulo del Libro</strong>
          <span>{book?.Title}</span>
          <strong>Autor</strong>
          <span>{book?.Author}</span>
          <strong>Editorial</strong>
          <span>{book?.Editorial}</span>
          <strong>Categoria</strong>
          <span>{book?.ShelfCategory}</span>
          <strong>Año de publicación</strong>
          <span>{book?.PublicationYear}</span>
          <strong>Codigo ISBN</strong>
          <span>{book?.ISBN}</span>
          <strong>Codigo de Signatura</strong>
          <span>{book?.SignatureCode}</span>
          <div className="">{book?.id && <BtnReserve Goto={Goto} id={book.id} text="Solicitar Prestamo"/>}</div>
        </span>

        <div className="flex justify-center flex-col pl-2">
          <strong className=" text-2xl text-center">
            Puede que también te interésen estas obras
          </strong>
          <div className=" grid grid-rows-2 grid-cols-2 gap-2 m-4">
            {books?.slice(8, 12).map((book) => (
              <BookCard key={book.id} Book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookInformation;
