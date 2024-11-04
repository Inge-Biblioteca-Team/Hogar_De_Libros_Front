import { toast } from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { Book } from "../Types/BooksChildrensTypes";
import { EditChildrenBook } from "../Services/ChildrenServices";

const UseEditChildrenBook = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: Book) =>
        toast.promise(EditChildrenBook(data), {
          loading: "Creando...",
          success: <span>Éxito, libro infantil editado correctamente</span>,
          error: (error: ApiError) => (
            <span>Error al editar el libro infantil: {error.message}</span>
          ),
        }),
      onSuccess() {
        queryClient.invalidateQueries("Children-colection");
      },
    });
  };
export default UseEditChildrenBook
