import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { GetBookById, GetBooks } from "../services/SvBooks";
import { Book } from "../type/Book";
import BtnReserve from "../components/BTN/BtnReserve";
import {
  BooksRoute,
  CurrentRoute,
  HomeRoute,
  SpecialRoute,
} from "../components/Redirections";
import { Breadcrumb } from "flowbite-react";
import BookCard from "../components/Cards/BookCard";

const BookInformation = () => {
  const { BookCode } = useParams<{ BookCode?: string }>();

  const {
    data: book,
    error,
    isLoading,
  } = useQuery<Book, Error>(
    ["book", BookCode],
    () => {
      if (!BookCode) {
        throw new Error("Error No existe ID de libro para buscar");
      }
      return GetBookById(BookCode);
    },
    { enabled: !!BookCode }
  );

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
          <span>{book?.PublishedYear}</span>
          <strong>Codigo ISBN</strong>
          <span>{book?.ISBN}</span>
          <strong>Codigo de Signatura</strong>
          <span>{book?.SignatureCode}</span>
          <div className="">{book?.BookCode && <BtnReserve Goto={book.BookCode} Objetive="Solicitar" id={book.BookCode} text="Solicitar Prestamo"/>}</div>
        </span>

        <div className="flex justify-center flex-col pl-2">
          <strong className=" text-2xl text-center">
            Puede que también te interésen estas obras
          </strong>
          <div className=" grid grid-rows-2 grid-cols-2 gap-2 m-4">
            {books?.slice(8, 12).map((book) => (
              <BookCard key={book.BookCode} Book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookInformation;
