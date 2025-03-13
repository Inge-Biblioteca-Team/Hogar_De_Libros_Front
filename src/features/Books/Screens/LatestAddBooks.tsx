import { useQuery } from "react-query";
import { getUserColection } from "../Services/BooksServices";
import { Book, Catalog } from "../Types/BooksTypes";
import { Carousel } from "flowbite-react";
import BookCard from "../Components/Views/BookCard";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LatestAddBooks = () => {
  const { data: catalog, isLoading } = useQuery<Catalog, Error>(
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
        setItemsPerGroup(4); //este hace lg
      } else if (window.innerWidth >= 1280 && window.innerWidth < 1536) {
        setItemsPerGroup(6); // este hace el xl
      } else {
        setItemsPerGroup(7); // paneo para el 2xl
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
          className="m-5 flex items-center w-full lg:w-full lg:pr-20 lg:pl-20 pr-20 pl-20 flex-col max-sm:w-full md:w-full max-sm:pr-5 max-sm:pl-5 max-sm:m-0
          md:pr-0 md:pl-0"
          id="MostPopularBooks"
        >
          <h2 className="font-bold 2xl:text-4xl lg:text-4xl pb-4 text-2xl text-center">
            Últimos libros añadidos a la colección
          </h2>
          {isLoading ? (
            <div className="grid lg:grid-cols-6 xl:grid-cols-6  2xl:grid-cols-6 max-sm:grid-cols-2 md:grid-cols-3 w-full gap-10">
              <Skeleton className="w-full h-96" />
              <Skeleton className="w-full h-96" />
              <Skeleton className="max-sm:hidden lg:block xl:block 2xl:block w-full h-96" />
              <Skeleton className="hidden lg:block xl:block 2xl:block w-full h-96" />
              <Skeleton className="hidden lg:block xl:block 2xl:block w-full h-96" />
              <Skeleton className="hidden lg:block xl:block 2xl:block w-full h-96" />
            </div>
          ) : (
            <Carousel
              className="h-[25rem] w-full lg:w-full md:w-full"
              indicators={false}
              pauseOnHover
              leftControl
              rightControl
            >
              {groupedBooks.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className=" md:w-full flex justify-center gap-x-4 "
                >
                  {group.map((Book) => (
                    <BookCard book={Book} key={"BO" + Book.BookCode} />
                  ))}
                </div>
              ))}
            </Carousel>
          )}
        </section>
      )}
    </>
  );
};

export default LatestAddBooks;
