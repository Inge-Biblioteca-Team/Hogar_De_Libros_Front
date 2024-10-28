import { useQuery } from "react-query";
import { getColection } from "../Services/BooksServices";
import { Book, Catalog } from "../Types/BooksTypes";
import { Carousel } from "flowbite-react";
import BookCard from "../Components/Views/BookCard";

const LatestAddBooks = () => {
  const { data: catalog } = useQuery<Catalog, Error>(
    ["colection"],
    () => getColection(1, 15, "", "", "", "1", "", ""),
    {
      staleTime: 5000,
    }
  );

  const chunkArray = (arr: Book[], size: number): Book[][] => {
    const result: Book[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedBooks = chunkArray(catalog?.data || [], 5);

  return (
    <>
      {catalog && catalog?.count > 0 && (
        <section
          className="m-5 flex items-center w-4/5 flex-col max-sm:m-0"
          id="MostPopularBooks"
        >
          <h2 className="font-bold text-3xl">
            Últimos libros añadidos a colección
          </h2>
          <Carousel
            indicators={false}
            pauseOnHover
            leftControl
            rightControl
            style={{ height: "25rem" }}
          >
            {groupedBooks.map((group, groupIndex) => (
              <div key={groupIndex} className=" flex justify-center gap-x-4">
                {group.map((Book) => (
                  <BookCard book={Book} key={"BO" + Book.BookCode} />
                ))}
              </div>
            ))}
          </Carousel>
        </section>
      )}
    </>
  );
};

export default LatestAddBooks;
