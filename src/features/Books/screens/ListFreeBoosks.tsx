import { useState } from "react";
import { useQuery } from "react-query";
import BookCard from "../components/BookCard";
import { GetBooks } from "../services/SvBooks";
import { Book } from "../type/Book";

const ListFreeBoosks = () => {
  const {
    data: books = [],
    error,
    isLoading,
  } = useQuery<Book[], Error>(["PopBooks"], GetBooks);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 12 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === books.length - 12 ? 0 : prevIndex + 1
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
          className="flex transition-transform duration-300 gap-2"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
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

export default ListFreeBoosks
