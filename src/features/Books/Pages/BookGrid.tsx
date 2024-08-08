import React from 'react';
import { Book } from '../type/Book';
import BookCard from '../components/BookCard';
import BtnReserve from '../components/BtnReserve';

const BookGrid: React.FC<{ books: Book[] }> = ({ books }) => (
  <div className="grid grid-cols-3 gap-4">
    {books.map((book) => (
      <figure 
      key={book.id} 
      className="rounded-md shadow-lg flex 
            flex-col justify-center items-center pb-3 max-sm:p-0
             "
          >
        <BookCard Book={book} />
        <BtnReserve />
      </figure>
    ))}
  </div>
  
);

export default BookGrid;

{/* <div
        className="flex w-full gap-5 items-center justify-center 
      max-sm:grid max-sm:grid-cols-2"
      >
        {books?.slice(0, 4).map((book) => (
          <figure
            key={book.id}
            className="rounded-md shadow-lg flex 
            flex-col justify-center items-center pb-3 max-sm:p-0
             "
          >
            <BookCard Book={book} />
            <BtnReserve  />
          </figure>
        ))}
      </div>
      <BtnShowMore /> */}