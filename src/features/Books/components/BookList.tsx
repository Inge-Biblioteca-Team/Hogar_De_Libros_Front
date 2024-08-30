import React from 'react';
import { Book } from '../type/Book';
import BookCardList from './BookCardList';


const BookList: React.FC<{ books: Book[] }> = ({ books }) => (
  <div className="grid grid-cols-1 gap-5">
    {books.map((book) => (
      <BookCardList key={book.id} Book={book} />
    ))}
  </div>
);

export default BookList;

