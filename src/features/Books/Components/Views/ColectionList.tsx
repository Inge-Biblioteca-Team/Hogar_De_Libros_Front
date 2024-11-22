import { Pagination } from "flowbite-react";
import { Catalog } from "../../Types/BooksTypes";
import ListCard from "./ListCard";

const ColectionList = ({
  colection,
  currentPage,
  onPageChange,
  totalPages,
  inf
}: {
  colection: Catalog;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  totalPages?: number;
  inf:boolean
}) => {
  return (
    <>
      <div className=" flex flex-col w-full gap-3">
        {colection.data.map((book) => (
          <ListCard key={'BK'+book.BookCode} book={book} inf={inf}/>
        ))}
      </div>
      {currentPage && onPageChange && totalPages && (
        <Pagination
          nextLabel="Siguiente"
          previousLabel="Anterior"
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={totalPages}
        ></Pagination>
      )}
    </>
  );
};

export default ColectionList;
