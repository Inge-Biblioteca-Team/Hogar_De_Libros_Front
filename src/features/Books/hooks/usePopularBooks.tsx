import { useQuery } from "react-query";
import { GetPopularBooks } from "../services/SvBooks";
import { useCallback } from "react";
import { Book } from "../type/Book";
import BookCard from "../components/BoockCard";
import BtnReserve from "../components/BtnReserve";

const usePopularBooks = () => {
  const {
    data: Book,
    error,
    isLoading,
  } = useQuery(['PopBooks'], GetPopularBooks);

  const popularBooks = useCallback(() => {
    if (isLoading) return <span>Loading...</span>;
    if (error) return <span>Error</span>;
    return Book.map((Book: Book) => (
      <figure key={Book.id} className="rounded-md w-1/4 pt-7 shadow-lg flex flex-col justify-center items-center pb-3">
        <BookCard cover={Book.cover} name={Book.title} />
        <BtnReserve id={Book.id} />
      </figure>
    ));
  }, [Book, isLoading, error]);

  return {
    popularBooks,
    isLoading,
    error,
  };
};

export { usePopularBooks };
