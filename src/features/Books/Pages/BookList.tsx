// src/components/BookList.tsx
import React from 'react';
import { Book } from '../type/Book';
import BookCard from './BookCard';
import BtnReserve from './BtnReserve';

const BookList: React.FC<{ books: Book[] }> = ({ books }) => (
  <ul className="list-disc pl-5">
    {books.map((book) => (
      <li key={book.id}>
        <BookCard Book={book} />
        <BtnReserve />
      </li>
    ))}
  </ul>
);

export default BookList;
