import { Pagination } from "flowbite-react";

const BookPagination = ({
  currentPage,
  onPageChange,
  totalPages,
}: {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}) => {
  return (
    <div
      className={`flex overflow-x-auto sm:justify-center pb-4 ${
        totalPages == 0 || totalPages === 1 ? `hidden` : ``
      }`}
    >
      <Pagination
        layout="pagination"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        previousLabel="Anterior"
        nextLabel="Siguiente"
        showIcons
      />
    </div>
  );
};

export default BookPagination;
