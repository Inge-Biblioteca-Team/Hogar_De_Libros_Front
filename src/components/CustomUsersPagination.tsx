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
    <div className=" flex items-center justify-between py-2">
      <div className=" flex items-center gap-4">
        {totalPages > 0 ? (
          <span>
            Se han mostrado {limit * page} registros de {total}{" "}
          </span>
        ) : (
          <span>Se encontraron {total} registros</span>
        )}
      </div>
      <Pagination
        currentPage={page}
        onPageChange={onPageChange}
        totalPages={totalPages}
        nextLabel="Siguiente"
        previousLabel="Anterior"
        showIcons
        layout="pagination"
      />
    </div>
  );
};
export default CustomUsersPagination;
