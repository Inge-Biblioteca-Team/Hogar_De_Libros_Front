import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { Book } from "../Types/BooksChildrensTypes";
import { CreateChildrenBook } from "../Services/ChildrenServices";

const UseCreateChildrenBook = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: Book) =>
        toast.promise(CreateChildrenBook(data), {
          loading: "Creando...",
          success: <span>Éxito, recurso creado correctamente</span>,
          error: (error: ApiError) => (
            <span>Error al crear el recurso: {error.message}</span>
          ),
        }),
      onSuccess() {
        queryClient.invalidateQueries("Children-colection");
      },
    });
  };

export default UseCreateChildrenBook
