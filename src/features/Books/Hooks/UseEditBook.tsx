import { useMutation } from "react-query";
import { PatchEditBook } from "../services/SvBooks";
import {EditBook } from "../type/Book";

const UseEditBook = () => {
    return useMutation(
        ({ book, BookCode }: { book: EditBook; BookCode: string }) => PatchEditBook(book, BookCode),
        {
          onSuccess: (data) => {
            console.log('Book edited successfully:', data);
          },
          onError: (error) => {
            console.error('Error editing book:', error);
          },
        }
      );
    };
  export default UseEditBook;