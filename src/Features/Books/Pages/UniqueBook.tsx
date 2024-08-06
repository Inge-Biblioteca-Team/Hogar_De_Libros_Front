import { useLocation } from "react-router-dom";
import BtnReserve from "../components/BtnReserve";

function UniqueBook() {
  const location = useLocation();
  const { Book } = location.state;
  return (
    <>
      <div
        className="flex justify-center mr-40 ml-40 p-10 bg-gray-200
      border border-transparent rounded-xl shadow-xl gap-x-14 mt-10"
      >
        <div className="w-4/12">
          <img
            className="border border-gray-300 rounded-md 
          w-full"
            src={Book.Cover}
          />
        </div>
        <div className="flex flex-col  space-y-2">
          <cite className="font-bold mb-6 text-center max-w-2xl text-3xl">{Book.Title}</cite>
          <span className="font-bold text-xl ">Autor:</span>
          <span>{Book.Author}</span>
          <span className="font-bold text-xl">Editorial:</span>
          <span>{Book.Editorial}</span>
          <span className="font-bold text-xl">Categoria:</span>
          <span>{Book.Category}</span>
          <span className="font-bold text-xl">Año de publicacion:</span>
          <span>{Book.PublicationYear}</span>
          <span className="font-bold text-xl">Codigo ISBN:</span>
          <span>{Book.ISBN}</span>
          <span className="font-bold text-xl">Codigo Estado:</span>
          <span>Disponible</span>
          <div className="flex">
            <BtnReserve />
          </div>
        </div>
      </div>
    </>
  );
}

export default UniqueBook;
