import { useLocation, useNavigate } from "react-router-dom";
import BtnReserve from "../components/BtnReserve";
import { useQuery } from "react-query"
import { GetBooks } from "../services/SvBooks";
import "../styles/BookStyles.css";
import { Book } from "../type/Book";

function UniqueBook() {
  const location = useLocation();
  const { Book } = location.state || {};

 const navigate = useNavigate();
 
 const { data: books = [], error, isLoading } = useQuery("books", GetBooks);
 if (!location.state || !location.state.Book) {
    return <span>Error: No se encontró el libro.</span>;
  }
 if (isLoading) return <span>Loading...</span>;
 if (error) return <span>Error: "error"</span>;
 
   const filterBooks = books.filter(
    (b : Book) => (b.Category === Book.Category || b.Author === Book.Author) && b.id !== Book.id
  );

  // Seleccionar dos libros aleatoriamente
  const getRandomBooks = (books: Book[]  , num: number) => {
    const shuffled = books.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomBooks = getRandomBooks(filterBooks, 2);

  const handleRecommendedBookClick = (relatedBook: Book) => {
    navigate(`/book/${relatedBook.id}`, { state: { Book: relatedBook } });
  };

  return (
    <>
      <button onClick={()=>navigate("/")} className="ml-20 text-sm hover:text-blue-900">Inicio</button>  &gt;
      <button onClick={()=>navigate("/Sistema")} className="text-sm hover:text-blue-900">Libros</button>  &gt; 
      <button onClick={()=>navigate("/")}  className="text-sm hover:text-blue-900">{Book.Category}</button>  &gt;
      <span className="text-sm text-Body ">{Book.Title} </span>
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
          <span className="max-w-md text-Body text-lg">
            Año de publicacion:
          </span>
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
            Según tu búsqueda, pensamos que podrían interesarte los siguientes
            libros:
          </p>
          <p>
         {randomBooks.map((relatedBook) => (
          <div onClick={() => handleRecommendedBookClick(relatedBook)} key={relatedBook.id} className=" flex gap-4 mt-4 ">
            <img className="related-book" src={relatedBook.Cover} alt={`Portada del libro ${relatedBook.Title}`} />
            <span className="max-w-sm ">{relatedBook.Title}</span>
            
          </div>
        ))}
          </p>
        </section>
      </div>
    </>
  );
}

export default UniqueBook;
