import React from 'react';

const limits = [5, 10, 15, 20];

const BookLimitSelector: React.FC<{ limit: number, setLimit: (limit: number) => void }> = ({ limit, setLimit }) => (
  <div className="flex items-center mb-4">
    <label htmlFor="limit" className="mr-2 text-xl font-bold">Mostrar</label>
    <select
      id="limit"
      value={limit}
      onChange={(e) => setLimit(Number(e.target.value))}
      className="border-none rounded p-2 font-bold bg-transparent"
    >
      {limits.map((limitOption) => (
        <option key={limitOption} value={limitOption}>{limitOption}</option>
      ))}
    </select>
  </div>
);

export default BookLimitSelector;
