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
      <section className="space-y-4 mt-6 w-11/12" id="MostPopularBooks">
        <h2
          className="font-bold text-4xl text-center 
          max-sm:text-xl"
        >
          Últimos libros añadidos a la colección
        </h2>
        {isLoading ? (
          <div className="flex w-full justify-between">
            <div className="bg-white p-2 rounded-md w-fit">
              <Skeleton width={170} height={320} />
              <Skeleton height={30} />
            </div>
            <div className="bg-white p-2 rounded-md w-fit">
              <Skeleton width={170} height={320} />
              <Skeleton height={30} />
            </div>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white p-2 rounded-md w-fit max-lg:hidden">
                <Skeleton width={170} height={320} />
                <Skeleton height={30} className="mt-2" />
              </div>
            ))}
          </div>
        ) : (
          catalog &&
          catalog?.count > 0 && (
            <Carousel
              className="h-[25rem] w-full max-lg:w-full md:w-full"
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
          )
        )}
      </section>
    </>
  );
};

export default LatestAddBooks;
