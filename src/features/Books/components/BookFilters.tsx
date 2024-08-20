import React from 'react';
import { FaTh, FaList } from 'react-icons/fa'; 

interface BookFiltersProps {
  setView: (view: 'grid' | 'list') => void;
  currentView: 'grid' | 'list';
}

const BookFilters: React.FC<BookFiltersProps> = ({ setView, currentView }) => (
  <div className="flex justify-between items-center mb-4">
    <div>
      <button
        onClick={() => setView('grid')}
        className={`mr-2 ${currentView === 'grid' ? 'font-bold text-blue-500' : ''}`}
        aria-label="Vista en cuadrícula"
      >
        <FaTh size={35} />
      </button>
      <button
        onClick={() => setView('list')}
        className={`${currentView === 'list' ? 'font-bold text-blue-500' : ''}`}
        aria-label="Vista en lista"
      >
        <FaList size={35} />
      </button>
    </div>
  </div>
);

export default BookFilters;

