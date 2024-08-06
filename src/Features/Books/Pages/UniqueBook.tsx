
import { useLocation } from "react-router-dom";
import BtnReserve from "../components/BtnReserve";
import '../components/UniqueBookStyle.css';

function UniqueBook() {
  const location = useLocation();
  const { Book } = location.state;
  
  return (
    <>
      <span className="ml-20 text-sm">
        Inicio &gt; Libros &gt; {Book.Category} &gt; {Book.Title}{" "}
      </span>
      <div className="flex gap-6 mt-4">
        <section className="flex-grow ml-20">
          <img
            className="book-cover"
            src={Book.Cover}
            alt={`Portada del libro ${Book.Title}`}
          />
        </section>
        <section className="flex flex-col space-y-1 flex-grow">
          <cite className="mb-1 max-w-md text-xl">{Book.Title}</cite>
          <span className="max-w-md text-Body text-lg">Autor:</span>
          <span className="max-w-md text-lg">{Book.Author}</span>
          <span className="max-w-md text-Body text-lg">Editorial:</span>
          <span className="max-w-md text-lg">{Book.Editorial}</span>
          <span className="max-w-md text-Body text-lg">Categoria:</span>
          <span className="max-w-md text-lg">{Book.Category}</span>
          <span className="max-w-md text-Body text-lg">Año de publicacion:</span>
          <span className="max-w-md text-lg">{Book.PublicationYear}</span>
          <span className="max-w-md text-Body text-lg">Codigo ISBN:</span>
          <span className="max-w-md text-lg">{Book.ISBN}</span>
          <div className="flex justify-start">
            <BtnReserve />
          </div>
        </section>
        <section className="flex flex-col flex-grow space-y-1">
          <h1 className="max-w-md text-xl">Recomendaciones </h1>
          <p className="max-w-md text-lg ">
            Según tu búsqueda, pensamos que podrían interesarte los siguientes libros:
          </p>
        </section>
      </div>
    </>
  );
}

export default UniqueBook;
