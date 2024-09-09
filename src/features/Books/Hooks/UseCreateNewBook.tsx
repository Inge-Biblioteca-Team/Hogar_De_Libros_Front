import { useMutation } from "react-query";
import { PostNewBook } from "../services/SvBooks";
import toast from "react-hot-toast";
import { Book } from "../type/Book";

const UseCreateNewBook = ({
  Open,
  Reset,
  category
}: {
  Open: React.Dispatch<React.SetStateAction<boolean>>;
  Reset: () => void;
  category:string
}) => {
  const mutation = useMutation({
    mutationFn: (book: Book) => PostNewBook(book, category),
    onSuccess: () => {
      toast.success("Libro añadido con exito!");
      Open(true);
      Reset();
    },
    onError: (error: Error) => {
      toast.error(`Error al añadir libro: ${error.message}`);
    },
  });

  return {
    ...mutation,
    isLoading: mutation.isLoading,
  };
};

export default UseCreateNewBook;
