import React from 'react';

const limits = [4, 8, 12, 24];

const BookLimitSelector: React.FC<{ limit: number, setLimit: (limit: number) => void }> = ({ limit, setLimit }) => (
  <div className="flex items-center mb-4">
    <label htmlFor="limit" className="mr-2">Mostrar</label>
    <select
      id="limit"
      value={limit}
      onChange={(e) => setLimit(Number(e.target.value))}
      className="border rounded p-2"
    >
      {limits.map((limitOption) => (
        <option key={limitOption} value={limitOption}>{limitOption}</option>
      ))}
    </select>
  </div>
);

export default BookLimitSelector;
