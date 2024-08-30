import { Alert } from "flowbite-react";
import BookCategoryFilter from "../components/BookCategoryFilter";
import BookFilters from "../components/BookFilters";
import BookFiltersAuthor from "../components/BookFiltersAuthor";
import BookGrid from "../components/BookGrid";
import BookLimitSelector from "../components/BookLimitSelector";
import BookPagination from "../components/BookPagination";
import { useState } from "react";
import { useQuery } from "react-query";
import { GetAllBooks } from "../services/SvBooks";
import { Book } from "../type/Book";
import BookList from "../components/BookList";

const SearchBookByName = () => {
  const savedLimit = localStorage.getItem("bookLimit");
  const initialLimit = savedLimit ? parseInt(savedLimit) : 10;

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(initialLimit);
  const [view, setView] = useState<"list" | "grid">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<string>("");

  const {
    data: books,
    error,
    isLoading,
  } = useQuery<Book[], Error>(
    ["BookCatalog", page, limit],
    () => GetAllBooks(page, limit),
    {
      keepPreviousData: true,
    }
  );

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    localStorage.setItem("bookLimit", newLimit.toString());
    window.location.reload();
  };

  const handleViewChange = (newView: "list" | "grid") => {
    setView(newView);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  //El filtrado hay que cambiarlo para que realice fetch y establesca los resultados en base a eso
  const filteredBooks = books?.filter(
    (book) =>
      (!category || book.Category === category) &&
      (book.Author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.Title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <section className="flex flex-col justify-center items-center">
      <span className=" w-full pl-3 text-2xl">
        <a href="/HogarDeLibros">Incio</a>&gt;&gt;<a href="/HogarDeLibros">Libros</a>
        &gt;&gt;<span>Busqueda Por Titulo</span>
      </span>
      <div className="w-4/5 flex flex-col items-center justify-center pt-1">
        <div className=" w-full flex justify-between">
          <div className=" flex justify-center items-center gap-7">
            <BookCategoryFilter handleCategoryChange={handleCategoryChange} />
            <BookFiltersAuthor handleSearch={handleSearch} />
          </div>
          <div className="flex gap-4">
            <BookLimitSelector limit={limit} setLimit={handleLimitChange} />
            <BookFilters setView={handleViewChange} currentView={view} />
          </div>
        </div>
        <div className="w-full">
          {filteredBooks && filteredBooks.length > 0 ? (
            view === "grid" ? (
              <BookGrid books={filteredBooks!} />
            ) : (
              <BookList books={filteredBooks!} />
            )
          ) : (
            <Alert color="warning" rounded>
              La categoría seleccionada no existe.
            </Alert>
          )}
          <BookPagination page={page} setPage={setPage} limit={limit} />
        </div>
      </div>
    </section>
  );
};

export default SearchBookByName;
