import { Pagination } from "flowbite-react";

const CustomUsersPagination = ({
  page,
  onPageChange,
  totalPages,
  limit,
  total,
}: {
  page: number;
  onPageChange: (page: number) => void;
  totalPages: number;
  limit: number;
  total: number;
}) => {
  return (
    <div className=" flex items-center justify-between py-2 w-11/12">
      <div className=" flex items-center gap-4 max-sm:hidden">
        {totalPages > 0 ? (
          <span>
            Se han mostrado {limit * page} registros de {total}{" "}
          </span>
        ) : (
          <span>Se encontraron {total} registros</span>
        )}
      </div>
      <Pagination
        className=" max-sm:hidden "
        currentPage={page}
        onPageChange={onPageChange}
        totalPages={totalPages}
        nextLabel="Siguiente"
        previousLabel="Anterior"
        showIcons
        layout="pagination"
      />
      <div className=" hidden w-full max-sm:flex items-center justify-center">
        <Pagination
          currentPage={page}
          onPageChange={onPageChange}
          totalPages={totalPages}
          nextLabel="Siguiente"
          previousLabel="Anterior"
          showIcons
          layout="navigation"
        />
      </div>
    </div>
  );
};
export default CustomUsersPagination;
