import React from 'react';
import { Book } from '../type/Book';
import BookCard from './BookCardLanding';
import BtnReserve from './BtnReserve';

const BookList: React.FC<{ books: Book[] }> = ({ books }) => (
    <div className="list-disc pl-5 space-y-8">
    {books.map((book) => (
      <figure 
      key={book.id}
      className="rounded-md shadow-lg flex 
            flex-col justify-center items-center pb-3 max-sm:p-0
             "
          >
        <BookCard Book={book} />
        <BtnReserve id={book.id}/>
        </figure>
    ))}
  </div>
    
);

export default BookList;

