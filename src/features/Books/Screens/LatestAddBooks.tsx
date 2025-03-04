import { useQuery } from "react-query";
import { getUserColection } from "../Services/BooksServices";
import { Book, Catalog } from "../Types/BooksTypes";
import { Carousel } from "flowbite-react";
import BookCard from "../Components/Views/BookCard";
import { useEffect, useState } from "react";

const LatestAddBooks = () => {
  const { data: catalog } = useQuery<Catalog, Error>(
    ["colection"],
    () => getUserColection(1, 20, "", "", "", "1", "", ""),
    {
      staleTime: 5000,
    }
  );
  const [itemsPerGroup, setItemsPerGroup] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerGroup(2);
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setItemsPerGroup(3);
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setItemsPerGroup(4);  //este hace lg
      } else if (window.innerWidth >= 1280 && window.innerWidth < 1536) {
        setItemsPerGroup(6);  // este hace el xl
      } else {
        setItemsPerGroup(7);  // paneo para el 2xl
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkArray = (arr: Book[], size: number): Book[][] => {
    const result: Book[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedBooks = chunkArray(catalog?.data || [], itemsPerGroup);

  return (
    <>
      {catalog && catalog?.count > 0 && (
        <section
          className="m-5 flex items-center w-4/5 flex-col max-sm:w-full max-sm:pr-5 max-sm:pl-5 max-sm:m-0"
          id="MostPopularBooks"
        >
          <h2 className="font-bold 2xl:text-4xl lg:text-4xl pb-4 text-2xl text-center">
            Últimos libros añadidos a la colección
          </h2>
          <Carousel
            indicators={false}
            pauseOnHover
            leftControl
            rightControl
            style={{ height: "25rem" }}
          >
            {groupedBooks.map((group, groupIndex) => (
              <div key={groupIndex} className=" flex justify-center gap-x-4 ">
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
