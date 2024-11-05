import { useQuery } from "react-query";
import { useState } from "react";
import { Catalog } from "../Types/BooksTypes";
import { getUserColection } from "../Services/BooksServices";
import BookCard from "../Components/BookCard";

const ListMostPopularBooks = () => {
  const { data: books } = useQuery<Catalog, Error>(
    ["colection"],
    () => getUserColection(1, 30),
    {
      staleTime: 5000,
    }
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (books?.count ? -15 : prevIndex - 1) : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === (books?.count ? -15 : prevIndex + 1) ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative px-4 w-full max-sm:w-4/5" id="Programs">
      <div className="flex items-center gap-1 justify-between">
        <button
          type="button"
          onClick={prevSlide}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-3 rounded-full transition duration-300 ease-in-out hidden sm:flex"
          aria-label="Anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="w-full overflow-hidden max-sm:overflow-x-scroll">
          <article
            className="flex transition-transform duration-300 gap-2 h-96 w-52 "
            style={{ transform: `translateX(-${currentIndex * 200}%)` }}
          >
            {books?.data?.map((books, index) => (
              <BookCard key={index} Book={books} />
            ))}
          </article>
        </div>
        <button
          type="button"
          onClick={nextSlide}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-3 rounded-full transition duration-300 ease-in-out hidden sm:flex"
          aria-label="Siguiente"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ListMostPopularBooks;
