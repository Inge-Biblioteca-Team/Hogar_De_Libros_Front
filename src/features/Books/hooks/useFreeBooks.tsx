import { useQuery } from "react-query";
import { GetFreeBooks } from "../services/SvBooks";
import { useCallback } from "react";
import { Book } from "../type/Book";
import BookCard from "../components/BoockCard";

const useFreeBooks = () => {
  const { data: Books, error, isLoading } = useQuery(['FreeBooks'], GetFreeBooks);//['freeBooks'], () => GetBooks("free") el final seria este con el uso del api

  const FreeBooks = useCallback(() => {
    if (isLoading) return <span>Loading...</span>;
    if (error) return <span>Error</span>;
    return Books.map((Book: Book) => (
      <figure key={Book.id} className="rounded-md w-1/4 pt-7 shadow-lg flex flex-col justify-center items-center">
        <BookCard cover={Book.cover} name={Book.title} />
      </figure>
    ));
  }, [Books, isLoading, error]);

  return {
    FreeBooks,
    isLoading,
    error,
  };
};

export { useFreeBooks };
