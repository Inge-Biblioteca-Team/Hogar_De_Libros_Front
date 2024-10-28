import { Pagination } from "flowbite-react";
import { Catalog } from "../../Types/BooksTypes";
import ListCard from "./ListCard";

const ColectionList = ({
  colection,
  currentPage,
  onPageChange,
  totalPages,
}: {
  colection: Catalog;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  totalPages?: number;
}) => {
  return (
    <>
      <div className=" flex flex-col w-full gap-3">
        {colection.data.map((book) => (
          <ListCard key={book.BookCode} book={book} />
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
