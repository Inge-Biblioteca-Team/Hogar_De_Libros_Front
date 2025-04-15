import { Pagination } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

const MobilePagination = ({
  page,
  onPageChange,
  totalPages,
  setCurrentLimit,
}: {
  page: number;
  onPageChange: (page: number) => void;
  totalPages: number;
  setCurrentLimit: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="hidden max-md:flex justify-between max-sm:items-end  items-baseline ">
      <div className=" max-sm:text-xs max-sm:mt-3">
        <span>Elementos por página.</span>
        <select
          name="Limit"
          id="Limit"
          title="Resultados por página"
          className=" bg-transparent border-none rounded-lg max-sm:text-xs"
          onChange={(e) => setCurrentLimit(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
      <Pagination
        nextLabel="Siguiente"
        previousLabel="Anterior"
        showIcons
        layout="navigation"
        currentPage={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default MobilePagination;
