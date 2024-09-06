import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Book, BookApiResponse } from "../../type/Book";
import BtnReserve from "../../components/BTN/BtnReserve";
import { Breadcrumb } from "flowbite-react";
import BookCard from "../../components/Cards/BookCard";
import {
  BooksCrumb,
  HomeCrumb,
  LastCrumb,
} from "../../../../components/BreadCrumb";
import { GetChildrenBByBookCode, GetChildrenBCategory } from "../../services/SvChildBooks";

const BookInformationChild = () => {
  const { BookCode } = useParams<{ BookCode?: string }>();

  const {
    data: book,
    error,
    isLoading,
  } = useQuery<Book, Error>(
    ["OneBookForUser", BookCode],
    () => {
      if (!BookCode) {
        throw new Error("Error No existe ID de libro para buscar");
      }
      return GetChildrenBByBookCode(BookCode);
    },
    { enabled: !!BookCode }
  );

  const { data: Recomdations } = useQuery<BookApiResponse, Error>(
    ["Recomdations", book?.ShelfCategory],
    () => GetChildrenBCategory(1, 100, "", book?.ShelfCategory),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading)
    return (
      <figure>
        <img src="" alt="" />
      </figure>
    );
  if (error) return <span>Error:{error.message}</span>;

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb />
        <BooksCrumb />
        {book?.ShelfCategory && <LastCrumb CurrentPage={book.ShelfCategory} />}
        {book?.Title && <LastCrumb CurrentPage={book.Title} />}
      </Breadcrumb>
      <div
        className="w-full grid pt-3"
        style={{ gridTemplateColumns: "25% 42% 33%" }}
      >
        <figure
          className="m-4 flex justify-center items-center shadow-2xl"
          style={{ height: "41em" }}
        >
          <img
            src={book?.Cover}
            alt={book?.Title}
            className=" object-fill rounded-md"
            style={{ height: "41em" }}
          />
        </figure>
        <span className="flex flex-col justify-center text-2xl gap-2 ml-4  ">
          <strong>Titulo</strong>
          <span>{book?.Title}</span>
          <strong>Autor</strong>
          <span className=" w-96 line-clamp-2">{book?.Author}</span>
          <strong>Editorial</strong>
          <span>{book?.Editorial}</span>
          <strong>Categoria</strong>
          <span>{book?.ShelfCategory}</span>
          <strong>Año de publicación</strong>
          <span>
            {book?.PublishedYear == 0 ? "Desconocido" : book?.PublishedYear}
          </span>
          <strong>Codigo ISBN</strong>
          <span>{book?.ISBN}</span>
          <strong>Codigo de Signatura</strong>
          <span>{book?.SignatureCode}</span>
          <div className="">
            {book?.BookCode && (
              <BtnReserve
                Goto={book.BookCode}
                Objetive="Solicitar"
                id={book.BookCode}
                text="Solicitar Prestamo"
              />
            )}
          </div>
        </span>

        <div className="flex justify-center flex-col pl-2">
          <strong className=" text-2xl text-center">
            Puede que también te interésen estas obras
          </strong>
          <div className=" grid grid-rows-2 grid-cols-2 gap-2 m-4">
            {Recomdations?.data.slice(0, 4).map((Recomdations) => (
              <BookCard key={Recomdations.BookCode} Book={Recomdations} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookInformationChild;
