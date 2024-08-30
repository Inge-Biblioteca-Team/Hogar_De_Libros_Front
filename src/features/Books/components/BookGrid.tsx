import React from "react";
import { Book } from "../type/Book";
import BookCard from "./Cards/BookCard";

const BookGrid: React.FC<{ books: Book[] }> = ({ books }) => (
  <div className="grid grid-cols-5 gap-5">
    {books.map((book) => (
        <BookCard Book={book} />
    ))}
  </div>
);

export default BookGrid;
