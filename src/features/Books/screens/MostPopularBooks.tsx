import { useQuery } from "react-query";
import { GetBooks } from "../services/SvBooks";
import { Book } from "../type/Book";
import { useState } from "react";
import BookFilters from "../Pages/BookFilters";
import BookList from "../Pages/BookList";
import BookGrid from "../Pages/BookGrid";
import BookPagination from "../Pages/BookPagination";
import BtnShowMore from "../components/BtnShowMore";
import BookLimitSelector from "../Pages/BookLimitSelector";
import BookFiltersAuthor from "../Pages/BookFiltersAuthor";
import BookCategoryFilter from "./BookCategoryFilter";
import { Alert } from 'flowbite-react';


const MostPopularBooks = () => {
  const savedLimit = localStorage.getItem('bookLimit');
  const initialLimit = savedLimit ? parseInt(savedLimit) : 4;

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(initialLimit); 
  const [view, setView] = useState<'list' | 'grid'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState<string>('');



  const {
    data: books,
    error,
    isLoading,
  } = useQuery<Book[], Error>(["PopBooks", page, limit], () => GetBooks(page, limit), {
    keepPreviousData: true,
  });

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    localStorage.setItem('bookLimit', newLimit.toString());
     window.location.reload();
  };

  const handleViewChange = (newView: 'list' | 'grid') => {
    setView(newView);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  const filteredBooks = books?.filter(book =>
    (!category || book.Category === category) && 
    (book.Author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.Title.toLowerCase().includes(searchQuery.toLowerCase()))
  );


  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <section
      className="w-4/5 flex flex-col items-center justify-center"
      id="MostPopularBooks"
    >
      <h2 className="text-3xl pb-8">Libros más solicitados</h2>
      <div className="flex justify-center w-full mb-4">
        <div className="flex items-center space-x-1 pr-40">
        <BookCategoryFilter handleCategoryChange={handleCategoryChange} />
          <BookFiltersAuthor handleSearch={handleSearch} />
        </div>
        <div className="flex items-center space-x-4 pl-40">
          <BookLimitSelector limit={limit} setLimit={handleLimitChange} />
          <BookFilters setView={handleViewChange} currentView={view} />
        </div>
      </div>
      {filteredBooks && filteredBooks.length > 0 ? (
        view === 'grid' ? 
        <BookGrid books={filteredBooks!} />
        : 
        <BookList books={filteredBooks!} />
      ) : (
        <Alert color="warning" rounded>
          La categoría seleccionada no existe.
        </Alert>
      )}
      <BtnShowMore />
      <BookPagination page={page} setPage={setPage} />
    </section>
  );
};

export default MostPopularBooks;