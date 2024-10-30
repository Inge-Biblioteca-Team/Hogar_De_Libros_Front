import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { downType } from "../../../Types/GlobalTypes";
import { DisableChildrenBook } from "../Services/ChildrenServices";

const UseDownChildrenBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: downType) =>
      toast.promise(DisableChildrenBook(data), {
        loading: "Creando...",
        success: <span>Éxito, recurso dado de baja correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al dar de baja el recurso: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("Children-colection");
    },
  });
};

export default UseDownChildrenBook;
