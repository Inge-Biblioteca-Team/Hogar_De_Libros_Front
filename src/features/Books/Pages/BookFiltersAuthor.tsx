import React from 'react';
import { Dropdown } from 'flowbite-react';

interface BookFiltersAuthorProps {
  handleSortChange: (order: 'author' | 'title') => void;
}

const BookFiltersAuthor: React.FC<BookFiltersAuthorProps> = ({ handleSortChange }) => {
  return (
    <Dropdown label="Ordenar por" className="mr-4">
      <Dropdown.Item onClick={() => handleSortChange('author')}>Autor</Dropdown.Item>
      <Dropdown.Item onClick={() => handleSortChange('title')}>Título</Dropdown.Item>
    </Dropdown>
  );
};

export default BookFiltersAuthor;
