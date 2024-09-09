import { useQuery } from "react-query";
import { GetBooks } from "../services/SvBooks";
import { Book } from "../type/Book";
import { useState } from "react";
import BookCard from "../components/Cards/BookCardLanding";

const ListMostPopularBooks = () => {
  const {
    data: books = [],
    error,
    isLoading,
  } = useQuery<Book[], Error>(["PopBooks"], GetBooks);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 15 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === books.length - 15 ? 0 : prevIndex + 1
    );
  };

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;
  return (
    <section
    className="relative px-4 w-full max-sm:w-4/5"
    id="Programs"
  >
    <div className="flex items-center gap-1 justify-between">
      <button
        type="button"
        onClick={prevSlide}
        className="bg-gray-300 rounded-full p-2 max-sm:hidden"
      >
        &lt;
      </button>
      <div className="w-full overflow-hidden max-sm:overflow-x-scroll">
        <article
          className="flex transition-transform duration-300 gap-2 h-96 w-52 "
          style={{ transform: `translateX(-${currentIndex * 200}%)` }}
        >
          {books.map((books, index) => (
            <BookCard key={index} Book={books} />
          ))}
        </article>
      </div>
      <button
        type="button"
        onClick={nextSlide}
        className="bg-gray-300 rounded-full p-2 max-sm:hidden"
      >
        &gt;
      </button>
    </div>
  </section>
  )
}

export default ListMostPopularBooks
