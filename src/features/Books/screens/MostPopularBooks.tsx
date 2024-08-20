import { useQuery } from "react-query";
import BtnReserve from "../components/BtnReserve";
import BtnShowMore from "../components/BtnShowMore";
import { GetBooks } from "../services/SvBooks";
import { Book } from "../type/Book";
import BookCardLanding from "../components/BookCardLanding";

const MostPopularBooks = () => {
  const {
    data: books,
    error,
    isLoading,
  } = useQuery<Book[], Error>(["PopBooks"], GetBooks);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <section
      className="w-4/5 flex flex-col items-center justify-center"
      id="MostPopularBooks"
    >
      <h2 className="text-3xl pb-8">Libros más solicitados</h2>
      <div
        className="flex w-full gap-5 items-center justify-center 
      max-sm:grid max-sm:grid-cols-2"
      >
        {books?.slice(0, 4).map((book) => (
          <figure
            key={book.id}
            className="rounded-md shadow-lg flex 
            flex-col justify-center items-center pb-3 max-sm:p-0
             "
          >
            <BookCardLanding Book={book} />
            <BtnReserve id={book.id}/>
          </figure>
        ))}
      </div>
      <BtnShowMore />
    </section>
  );
};

export default MostPopularBooks;
