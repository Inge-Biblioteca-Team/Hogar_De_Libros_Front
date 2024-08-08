import React from 'react';

const BookPagination: React.FC<{ page: number, setPage: (page: number) => void }> = ({ page, setPage }) => (
  <div className="flex justify-center mt-4">
    <button onClick={() => setPage(page - 1)} disabled={page === 1} className="mr-2">
      Anterior
    </button>
    <button onClick={() => setPage(page + 1)}>
      Siguiente
    </button>
  </div>
);

export default BookPagination;
