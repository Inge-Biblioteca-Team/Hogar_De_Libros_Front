import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';

interface BookCategoryFilterProps {
  handleCategoryChange: (category: string) => void;
}

const BookCategoryFilter: React.FC<BookCategoryFilterProps> = ({ handleCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    handleCategoryChange(category);
  };

  return (
    <Dropdown color="blue" label={selectedCategory || "Categoría"} className="mr-4">
      <Dropdown.Item onClick={() => handleCategorySelect('')}>Todas</Dropdown.Item>
      <Dropdown.Item onClick={() => handleCategorySelect('Obras generales')}>Obras generales</Dropdown.Item>
      <Dropdown.Item onClick={() => handleCategorySelect('Literura')}>Literatura</Dropdown.Item>
      <Dropdown.Item onClick={() => handleCategorySelect('Manga')}>Manga</Dropdown.Item>
    </Dropdown>
  );
};

export default BookCategoryFilter;
