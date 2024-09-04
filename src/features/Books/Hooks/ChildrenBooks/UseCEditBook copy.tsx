import { useMutation } from "react-query";
import { PatchEditBook } from "../../services/SvBooks";
import {EditBook } from "../../type/Book";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UseCEditBook = () => {
  const Navi = useNavigate()
    return useMutation(
        ({ book, BookCode }: { book: EditBook; BookCode: string }) => PatchEditBook(book, BookCode),
        {
          onSuccess: () => {
            toast.success("Informacion Actualizada Correctamente")
            Navi(-1)

          },
          onError: () => {
            toast.error('Error al acutualizar informacion:');
          },
        }
      );
    };
  export default UseCEditBook;