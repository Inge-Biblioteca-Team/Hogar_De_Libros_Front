import React, { useState } from 'react';

interface BookFiltersAuthorProps {
  handleSearch: (query: string) => void;
}

const BookFiltersAuthor: React.FC<BookFiltersAuthorProps> = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    handleSearch(value); 
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Autor o Título de libro..."
        className="pl-8 pr-4 py-2 border rounded-lg"
      />
      <span className="absolute left-2 top-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.243zM8 14A6 6 0 108 2a6 6 0 000 12z" clipRule="evenodd" />
        </svg>
      </span>
    </div>
  );
};

export default BookFiltersAuthor;



