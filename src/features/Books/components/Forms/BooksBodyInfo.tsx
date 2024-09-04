import ConditionStatus from "../../../../components/ConditionStatus";
import { Book } from "../../type/Book";
import BtnReserve from "../BTN/BtnReserve";

const BooksBodyInfo = ({ book }: { book: Book }) => {
  return (
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
        {book?.BookConditionRating ? (
          <ConditionStatus condition={book.BookConditionRating} />
        ) : null}
        <strong>Observaciones</strong>
        <span>{book?.Observations}</span>
        {book?.ReserveBook ? <strong>Libro de Reserva</strong> : null}
        <span>
          {book?.BookCode && (
            <BtnReserve
              Objetive="Prestamo"
              Goto={book.BookCode}
              id={book?.BookCode}
              text="Generar Prestamo"
            />
          )}
        </span>
      </span>
    </div>
  );
};

export default BooksBodyInfo;
