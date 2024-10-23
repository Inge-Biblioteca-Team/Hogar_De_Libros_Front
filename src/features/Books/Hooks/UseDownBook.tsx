import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { downType } from "../../../Types/GlobalTypes";
import { DisableBook } from "../Services/BooksServices";

const UseDownBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: downType) =>
      toast.promise(DisableBook(data), {
        loading: "Creando...",
        success: <span>Éxito, Recurso dado de baja correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al dar de baja el recurso: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("-colection");
    },
  });
};

export default UseDownBook;
