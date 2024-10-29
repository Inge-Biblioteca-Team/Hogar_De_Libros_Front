import { toast } from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { Book } from "../Types/BooksTypes";
import { EditBook } from "../Services/BooksServices";

const UseEditBook = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: Book) =>
        toast.promise(EditBook(data), {
          loading: "Editando...",
          success: <span>Éxito, recurso editado correctamente</span>,
          error: (error: ApiError) => (
            <span>Error al editar el recurso: {error.message}</span>
          ),
        }),
      onSuccess() {
        queryClient.invalidateQueries("colection");
      },
    });
  };
export default UseEditBook
