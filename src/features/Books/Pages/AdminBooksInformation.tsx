import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { GetByBookCode } from "../services/SvBooks";
import { Book } from "../type/Book";
import { Breadcrumb } from "flowbite-react";
import BtnReserve from "../components/BTN/BtnReserve";
import ConditionStatus from "../../../components/ConditionStatus";
import { HomeCrumb, LastCrumb, ManageCrumb, ManageCrumbObj } from "../../../components/BreadCrumb";

const AdminBooksInformation = () => {
  const { BookCode } = useParams<{ BookCode?: string }>();

  const { data: book } = useQuery<Book, Error>(
    ["OneBook", BookCode],
    () => {
      if (!BookCode) {
        throw new Error("Error No existe ID de libro para buscar");
      }
      return GetByBookCode(BookCode);
    },
    { enabled: !!BookCode, staleTime: 60000 }
  );

  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeCrumb/>
        <ManageCrumb/>
        <ManageCrumbObj Objetive="Libros" LK="Libros"/>
        {book?.Title && <LastCrumb CurrentPage={book?.Title} />}
      </Breadcrumb>
      <div
        className="w-full grid text-xl gap-14 place-content-center mt-10"
        style={{ gridTemplateColumns: "35% 20% 25%" }}
      >
        <figure className="shadow-2xl">
          <img
            src={book?.Cover}
            alt={book?.Title}
            className=" object-fill rounded-md"
            style={{ height: "75vh", width: "100%" }}
          />
        </figure>
        <span className=" inline-grid ">
          <strong>Titulo del Libro</strong>
          <span>{book?.Title}</span>
          <strong>Autor</strong>
          <span>{book?.Author}</span>
          <strong>Codigo ISBN</strong>
          <span>{book?.ISBN}</span>
          <strong>Codigo de Signatura</strong>
          <span>{book?.SignatureCode}</span>
          <strong>Categoria de estante</strong>
          <span>{book?.ShelfCategory}</span>
        </span>
        <span className="inline-grid ">
          <strong>Codigo de inscripción</strong>
          {book?.InscriptionCode == 0 ? (
            <span>Pendiente</span>
          ) : (
            <span>{book?.InscriptionCode}</span>
          )}
          <strong>Año de publicación</strong>
          <span>{book?.PublishedYear}</span>
          <strong>Editorial</strong>
          <span>{book?.Editorial}</span>
          {book?.BookConditionRating ? <ConditionStatus condition={book.BookConditionRating}/> : null}
          <strong>Observaciones</strong>
          <span>{book?.Observations}</span>
          {book?.ReserveBook ? <strong>Libro de Reserva</strong> : null}
          <span>
            {book?.BookCode && (
              <BtnReserve
              Objetive={book?.BookCode}
                text="Generar Prestamo"
              />
            )}
          </span>
        </span>
      </div>
    </>
  );
};

export default AdminBooksInformation;
