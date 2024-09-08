import { Alert, Breadcrumb } from "flowbite-react";
import BookCategoryFilter from "../components/SearchINP/BookCategoryFilter";
import BookFilters from "../components/BookFilters";
import BookLimitSelector from "../components/BookLimitSelector";
import BookPagination from "../components/BookPagination";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { GetBookByTtit_Category } from "../services/SvBooks";
import { BookApiResponse } from "../type/Book";
import UseDebounce from "../../../hooks/UseDebounce";
import BookCard from "../components/Cards/BookCard";
import BookCardList from "../components/Cards/BookCardList";
import InpSearchTitle from "../../../components/InpSearchTitle";
import { CurrentRoute, HomeRoute } from "../components/Redirections";
import { BooksCrumb } from "../../../components/BreadCrumb";

const SearchBookByName = () => {
  const [page, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("currentBookPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("currentBookPage", page.toString());
  };
  useEffect(() => {
    sessionStorage.setItem("currentBookPage", page.toString());
  }, [page]);

  const [limit, setCurrentLimit] = useState<number>(10);

  const [view, setView] = useState<"list" | "grid">("grid");
  const [searchCategory, setSearchCategory] = useState("");
  const [SearchTitle, setSearchTitle] = useState<string>("");
  const Title = UseDebounce(SearchTitle, 1000);
  const Category = UseDebounce(searchCategory, 1000);
  const {
    data: books,
    error,
    isLoading,
  } = useQuery<BookApiResponse, Error>(
    ["BookPerTitle", page, limit, Title, Category],
    () => GetBookByTtit_Category(page, limit, Title, Category),
    {
      keepPreviousData: true,
      staleTime: 600,
    }
  );
  const handleViewChange = (newView: "list" | "grid") => {
    setView(newView);
  };

  const MaxPage = Math.ceil((books?.count ?? 0) / limit);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <>
      <Breadcrumb className="custom-breadcrumb pb-4">
        <HomeRoute />
        <BooksCrumb/>
        <CurrentRoute CurrentPage={"Busqueda Por Título y Categoría"} />
      </Breadcrumb>
      <section className="flex flex-col justify-center items-center">
        <div className="w-4/5 flex flex-col items-center justify-center pt-1">
          <div className=" w-full flex justify-between">
            <div className=" flex justify-center items-center gap-7">
              <BookCategoryFilter handleCategoryChange={setSearchCategory} children={false} />
              <InpSearchTitle onSearch={setSearchTitle} Criterio="Título" />
            </div>
            <div className="flex gap-4">
              <BookLimitSelector limit={limit} setLimit={setCurrentLimit} />
              <BookFilters setView={handleViewChange} currentView={view} />
            </div>
          </div>
          <div className="w-full pt-2">
            {books?.count == 0 ? (
              <Alert color="warning" rounded>
                No existen Libros disponibles que considan con su busqueda
              </Alert>
            ) : view === "grid" ? (
              <div className="grid grid-cols-5 gap-5">
                {books?.data.map((book) => (
                  <BookCard Book={book} key={book.BookCode} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5">
                {books?.data.map((book) => (
                  <BookCardList key={book.BookCode} Book={book} />
                ))}
              </div>
            )}
            <BookPagination
              onPageChange={onPageChange}
              currentPage={page}
              totalPages={MaxPage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchBookByName;
