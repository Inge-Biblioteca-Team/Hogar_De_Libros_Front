import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';

interface BookCategoryFilterProps {
  handleCategoryChange: (category: string) => void;
  children:boolean
}

const BookCategoryFilter: React.FC<BookCategoryFilterProps> = ({ handleCategoryChange, children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    handleCategoryChange(category);
  };

  return (
  <>
  {children? <Dropdown color="blue" label={selectedCategory || "Categoría"} className="mr-4">
        <Dropdown.Item onClick={() => handleCategorySelect('')}>Todas</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('0-5Años')}>0 - 5 Años</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('+6años')}>+ 6 Años</Dropdown.Item>
    </Dropdown> : <Dropdown color="blue" label={selectedCategory || "Categoría"} className="mr-4">
        <Dropdown.Item onClick={() => handleCategorySelect('')}>Todas</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Ciencias Sociales')}>Ciencias Sociales</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Literatura')}>Literatura</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Geografía')}>Geografía</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Artes y Recreación')}>Artes y Recreación</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Ciencias Naturales')}>Ciencias Naturales</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Filosofía y Psicología')}>Filosofía y Psicología</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Tecnología')}>Tecnología</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Religión')}>Religión</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Lenguas')}>Lenguas</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Obras Generales')}>Obras Generales</Dropdown.Item>
    </Dropdown> }
   
  </>
  );
};

export default BookCategoryFilter;
