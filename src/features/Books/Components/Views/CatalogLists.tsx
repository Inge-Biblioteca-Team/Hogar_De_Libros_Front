import { Carousel } from "flowbite-react";
import { useQuery } from "react-query";
import { getColection } from "../../Services/BooksServices";
import { Catalog, Book } from "../../Types/BooksTypes";
import BookCard from "./BookCard";

const CatalogLists = ({ category }: { category: string }) => {
  const { data: catalog } = useQuery<Catalog, Error>(
    ["colection", category],
    () => getColection(1, 15, "", "", "", "1", "", category),
    {
      staleTime: 100000,
      retry: 1,
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
        <>
          <section>
            <h3 className=" text-center text-2xl font-bold">
              Libros {category.toLowerCase()}
            </h3>
          </section>
          <section className="m-5 flex items-center w-4/5 flex-col max-sm:m-0 pb-10">
            <Carousel
              slideInterval={2000 + Math.random() * 2000}
              indicators={false}
              pauseOnHover
              leftControl
              rightControl
              style={{ height: "22rem" }}
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
        </>
      )}
    </>
  );
};

export default CatalogLists;
