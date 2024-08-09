import { useState } from "react";
import { Book } from "../type/Book";

function CarrouselOfImages({ ListBooks }: { ListBooks: Book[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;
  const visibleBooks = ListBooks.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );
  const handleNext = () => {
    {
      currentIndex < ListBooks.length - itemsPerPage
        ? setCurrentIndex(currentIndex + 1)
        : setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    {
      currentIndex > 0
        ? setCurrentIndex(currentIndex - 1)
        : setCurrentIndex(ListBooks.length - itemsPerPage);
    }
  };

  return (
    <>
      <section className="overflow-hidden">
        <div className="flex gap-6">
          <button onClick={handlePrev}>&lt;</button>
          <div className="w-full overflow-hidden">
            <article className="flex flex-grow w-full  gap-10">
              {visibleBooks.map((listBook) => (
                <div
                  className="flex flex-col items-center w-56 h-96 box-border"
                  key={listBook.id}
                >
                  <img
                    className="w-full h-80 object-cover"
                    src={listBook.Cover}
                  />
                  <cite className=" mt-1 text-xs text-center">
                    {listBook.Title}
                  </cite>
                  <span className="mt-1 text-xs text-center">
                    Categoria: {listBook.Category}
                  </span>
                </div>
              ))}
            </article>
          </div>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </section>
    </>
  );
}

export default CarrouselOfImages;
