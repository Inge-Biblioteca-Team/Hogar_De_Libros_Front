import { Pagination } from "flowbite-react";

const PaginatationSelector = ({
  currentPage,
  onPageChange,
  totalPages,
}: {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}) => {
  return (
    <Pagination
      className=" text-lg"
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
      showIcons
      previousLabel="Anterior"
      nextLabel="Siguiente"
    />
  );
};

export default PaginatationSelector;
