import { useQuery } from "react-query";
import BtnReserve from "../components/BtnReserve";
import BtnShowMore from "../components/BtnShowMore";
import { GetPopularBooks } from "../services/SvBooks";
import { Book } from "../type/Book";
import BookCard from "../components/BookCard";

const MostPopularBooks = () => {
  const {
    data: books,
    error,
    isLoading,
  } = useQuery<Book[], Error>(["PopBooks"], GetPopularBooks);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <section className="w-4/5 flex flex-col items-center justify-center" id="MostPopularBooks">
      <h2 className="text-3xl pb-8">Libros más solicitados</h2>
      <div className="flex w-full gap-5 items-center justify-center">
        {books?.map((book) => (
            <figure key={book.id} className="rounded-md w-full shadow-lg flex flex-col justify-center items-center pb-3">
              <BookCard Book={book} />
              <BtnReserve id={book.id} />
            </figure>
        ))}
      </div>
      <BtnShowMore />
    </section>
  );
};

export default MostPopularBooks;
