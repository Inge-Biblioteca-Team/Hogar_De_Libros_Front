import { useQuery } from "react-query";
import { getUserColection } from "../Services/BooksServices";
import { Catalog } from "../Types/BooksTypes";
import { Button, Carousel } from "flowbite-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import BookCardForCarousel from "../Components/Views/BookCardForCarousel";
import {
  ChevronsLeft,
  ChevronsRight,
} from "../../../components/Chrevrons/Chevrons";

const LatestAddBooks = () => {
  const { data: catalog, isLoading } = useQuery<Catalog, Error>(
    ["colection"],
    () => getUserColection(1, 5, "", "", "", "1", "", ""),
    {
      staleTime: 50,
      refetchOnWindowFocus: false,
    }
  );

  const navi = useNavigate();
  const goTo = () => {
    navi("/HogarDeLibros/Catalogo/Completo");
  };

  return (
    <>
      {isLoading && (
        <>
          <h2 className="text-center font-bold text-4xl max-sm:text-xl">
            Últimos libros añadidos a la colección
          </h2>
          <div
            className="bg-white w-full max-lg:w-full rounded-md p-2
                h-[17rem] sm:h-[17rem] xl:h-[18rem] 2xl:h-[22rem] flex gap-3"
          >
            <div className="w-3/6">
              <Skeleton height={"99%"} width={"100%"} />
            </div>
            <div className="w-3/6">
              <Skeleton height={"10%"} width={"100%"} count={2} />
              <Skeleton height={"10%"} width={"80%"} count={4} />
            </div>
          </div>
        </>
      )}
      {!isLoading && catalog && catalog?.count > 0 && (
        <div className="flex items-center flex-col space-y-4">
          <h2
            className="font-bold text-4xl text-center 
          max-sm:text-xl"
          >
            Últimos libros añadidos a la colección
          </h2>
          <Carousel
            slideInterval={5000}
            leftControl={<ChevronsLeft />}
            rightControl={<ChevronsRight />}
          >
            {catalog.data.map((Book) => (
              <BookCardForCarousel key={"BO" + Book.BookCode} Book={Book} />
            ))}
          </Carousel>
          <Button className="dark:bg-[#2d2d2d]" size={"xl"} color={"blue"} onClick={goTo}>
            Ver más libros
          </Button>
        </div>
      )}
    </>
  );
};

export default LatestAddBooks;
