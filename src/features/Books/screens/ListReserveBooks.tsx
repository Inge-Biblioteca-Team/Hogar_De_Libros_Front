import { useQuery } from "react-query";
import { GetBooks } from "../services/SvBooks";
import { Book } from "../type/Book";
import CarrouselOfImages from "../components/CarrouselOfImages";

const ListReserveBooks = () => {
  const {
    data: books = [],
    error,
    isLoading,
  } = useQuery<Book[], Error>(["PopBooks"], GetBooks);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;
  return (
    <section>
      <CarrouselOfImages ListBooks={books} />
    </section>
  );
};

export default ListReserveBooks;
