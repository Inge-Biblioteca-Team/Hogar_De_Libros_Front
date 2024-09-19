import { useMutation } from "react-query";
import { PatchEditBook } from "../services/SvBooks";
import {Book} from "../type/Book";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UseEditBook = () => {
  const Navi = useNavigate()
    return useMutation(
        ({ book, BookCode, Category }: { book: Book; BookCode: string, Category:string }) => PatchEditBook(book, BookCode, Category),
        {
          onSuccess: () => {
            toast.success("Información Actualizada Correctamente")
            Navi(-1)

          },
          onError: () => {
            toast.error('Error al acutualizar información:');
          },
        }
      );
    };
  export default UseEditBook;