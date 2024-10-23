import { Pagination } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

const CustomPagination = ({
  page,
  onPageChange,
  totalPages,
  setCurrentLimit,
  total,
}: {
  page: number;
  onPageChange: (page: number) => void;
  totalPages: number;
  setCurrentLimit: Dispatch<SetStateAction<number>>;
  total: number;
}) => {
  return (
    <div className=" flex items-center justify-between py-2">
      <div className=" flex items-center gap-4">
        <span>Mostrar</span>
        <select
          name="Limit"
          id="Limit"
          title="Resultados por página"
          className=" bg-transparent border-none rounded-lg"
          onChange={(e) => setCurrentLimit(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
        <span>elementos por pagina de {total} totales </span>
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

export default CustomPagination;
