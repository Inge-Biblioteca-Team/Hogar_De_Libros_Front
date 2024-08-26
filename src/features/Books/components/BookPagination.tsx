// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";

// const BookPagination: React.FC<{
//   page: number;
//   setPage: (page: number) => void;
// }> = ({ page, setPage }) => (
//   <div className="flex justify-center items-baseline mt-4 mb-2 gap-7 text-xl">
//     <button
//       type="button"
//       onClick={() => setPage(page - 1)}
//       disabled={page === 1}
//       className="hover:scale-110"
//     >
//       <FontAwesomeIcon icon={faChevronLeft} />
//       <FontAwesomeIcon icon={faChevronLeft} />
//       <span>Anterior</span>
//     </button>
//     <span className=" cursor-default">|</span>
//     <button type="button" onClick={() => setPage(page + 1)} className="hover:scale-110">
//       <span>Siguiente</span>
//       <FontAwesomeIcon icon={faChevronRight} />
//       <FontAwesomeIcon icon={faChevronRight} />
//     </button>
//   </div>
// );

// export default BookPagination;

import React from "react";
import Pagination from "./Pagination"; // Importamos el componente de paginación

interface BookPaginationProps {
  page: number;
  setPage: (page: number) => void;
  limit: number;
}

const BookPagination: React.FC<BookPaginationProps> = ({
  page,
  setPage,
  limit,
}) => {
  return (
    <div className="flex justify-center items-baseline mt-4 mb-2 gap-7 text-xl">
      <Pagination
        currentPage={page}
        limit={limit}
        onPageChange={setPage}
      />
    </div>
  );
};

export default BookPagination;

