import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { BookC } from "../Types/BooksChildrensTypes";
import { CreateChildrenBook } from "../Services/ChildrenServices";

const UseCreateChildrenBook = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: BookC) =>
        toast.promise(CreateChildrenBook(data), {
          loading: "Creando...",
          success: <span>Éxito, libro infantil creado correctamente</span>,
          error: (error: ApiError) => (
            <span>Error al crear el libro infantil: {error.message}</span>
          ),
        }),
      onSuccess() {
        queryClient.invalidateQueries("Children-colection");
      },
    });
  };

export default UseCreateChildrenBook
