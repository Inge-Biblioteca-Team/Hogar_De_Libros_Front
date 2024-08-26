import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { GetBookByID } from "../services/SvBooks";
import { Book } from "../type/Book";
import { Breadcrumb } from "flowbite-react";
import { HomeRoute, BooksRoute, CurrentRoute, ManageRoute } from "../components/Redirections";
import BtnReserve from "../components/BtnReserve";

const AdminBooksInformation = () => {
  const { id } = useParams<{ id?: string }>();

  const { data: book } = useQuery<Book, Error>(
    ["book", id],
    () => {
      if (!id) {
        throw new Error("Error No existe ID de libro para buscar");
      }
      return GetBookByID(id);
    },
    { enabled: !!id,
      staleTime: 60000 }
  );
  const navi = useNavigate();
  const Goto = () => {
    navi(`/HogarDeLibros/CatalogoDeLibros/Libro/Prestamo/${id}`);
  };


  //Añadir is loading con skeleton loaders
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <HomeRoute/>
        <ManageRoute/>
        <BooksRoute />
        {book?.Title && <CurrentRoute CurrentPage={book?.Title} />}
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
          {book?.InscriptionCode == "N/A"? <span>Pendiente</span> : <span>{book?.InscriptionCode}</span> }
          <strong>Año de publicación</strong>
          <span>{book?.PublicationYear}</span>
          <strong>Editorial</strong>
          <span>{book?.Editorial}</span>
          <strong>Estado</strong>
          <span>{book?.Condition}</span>
          <strong>Observaciones</strong>
          <span>{book?.Observations}</span>
          <strong>Libro de Reserva</strong>
          <span>
          {book?.id && <BtnReserve Goto={Goto} id={book?.id} text="Generar Prestamo"/>}
          </span>
        </span>
      </div>
    </>
  );
};

export default AdminBooksInformation;
