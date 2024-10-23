import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { Book } from "../Types/BooksTypes";
import { CreateBook } from "../Services/BooksServices";

const UseCreateBook = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: Book) =>
        toast.promise(CreateBook(data), {
          loading: "Creando...",
          success: <span>Éxito, Recurso creado correctamente</span>,
          error: (error: ApiError) => (
            <span>Error al crear el recurso: {error.message}</span>
          ),
        }),
      onSuccess() {
        queryClient.invalidateQueries("colection");
      },
    });
  };

export default UseCreateBook
