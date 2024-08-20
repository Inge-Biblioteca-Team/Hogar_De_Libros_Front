import { useQuery } from "react-query";
import BtnShowMore from "../components/BtnShowMore";
import { GetBooks } from "../services/SvBooks";
import { Book } from "../type/Book";
import BookCardLanding from "../components/BookCardLanding";

const FreeBooksList = () => {
  const {
    data: books,
    error,
    isLoading,
  } = useQuery<Book[], Error>(["FreeBooks"], GetBooks);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <section className="w-4/5 flex flex-col items-center justify-center">
      <h2 className="text-3xl pb-8">Libros De Regalo</h2>
      <div
        className="flex w-full gap-5 items-center justify-center 
      max-sm:grid max-sm:grid-cols-2"
      >
        {books?.slice(5,9).map((book) => (
          <figure
            key={book.id}
            className="rounded-md w-full shadow-lg flex flex-col justify-center items-center pb-3 max-sm:pb-0"
          >
            <BookCardLanding Book={book} />
          </figure>
        ))}
      </div>
      <BtnShowMore />
    </section>
  );
};

export default FreeBooksList;
