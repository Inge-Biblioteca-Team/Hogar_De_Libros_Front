import { useQuery } from "react-query";
import { GetBooks } from "../services/SvBooks";
import { Book } from "../type/Book";
import BookCard from "../components/BookCard";
import BtnReserve from "../components/BtnReserve";
import BtnShowMore from "../components/BtnShowMore";

const ListMostPopularBooks = () => {
  const {
    data: books,
    error,
    isLoading,
  } = useQuery<Book[], Error>(["PopBooks"], GetBooks);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <div
      className="flex w-full gap-5 items-center justify-center 
    max-sm:grid max-sm:grid-cols-2"
    >
      {books?.slice(0,4).map((book) => (
        <figure
          key={book.id}
          className="rounded-md w-full shadow-lg flex 
          flex-col justify-center items-center pb-3 max-sm:p-0
           "
        >
          <BookCard Book={book} />
          <BtnReserve /*id={book.id} *//>
        </figure>
      ))}
    </div>
  )
}

export default ListMostPopularBooks
