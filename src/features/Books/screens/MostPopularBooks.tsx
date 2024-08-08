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

const MostPopularBooks = () => {
  const savedLimit = localStorage.getItem('bookLimit');
  const initialLimit = savedLimit ? parseInt(savedLimit) : 4;

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(initialLimit); 
  const [view, setView] = useState<'list' | 'grid'>('grid');
  const [, setSortOrder] = useState<'author' | 'title'>('author');


  const {
    data: books,
    error,
    isLoading,
  } = useQuery<Book[], Error>(["PopBooks", page], () => GetBooks(page, limit));

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    localStorage.setItem('bookLimit', newLimit.toString());
     window.location.reload();
  };

  const handleViewChange = (newView: 'list' | 'grid') => {
    setView(newView);
  };

  const handleSortChange = (order: 'author' | 'title') => {
    setSortOrder(order);
    window.location.reload();
  };


  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <section
      className="w-4/5 flex flex-col items-center justify-center"
      id="MostPopularBooks"
    >
      <h2 className="text-3xl pb-8">Libros más solicitados</h2>
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex items-center space-x-4">
          <BookFiltersAuthor handleSortChange={handleSortChange} />
        </div>
        <div className="flex items-center space-x-4">
          <BookLimitSelector limit={limit} setLimit={handleLimitChange} />
          <BookFilters setView={handleViewChange} currentView={view} />
        </div>
      </div>
      {
      view === 'grid' ? 
      <BookGrid books={books!} />
      : 
      <BookList books={books!} /> 
      }
      <BtnShowMore />
      <BookPagination page={page} setPage={setPage} />
    </section>
  );
};

export default MostPopularBooks;