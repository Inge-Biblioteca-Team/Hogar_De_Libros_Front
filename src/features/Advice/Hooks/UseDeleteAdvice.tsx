import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { DeleteAdvice } from "../Service/SvAdvice";
import { ApiError } from "../../../Types/ApiTypes";

const UseDeleteAdvice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      toast.promise(DeleteAdvice(id), {
        loading: "Eliminando...",
        success: <span>Éxito, aviso eliminado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al eliminar el aviso: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("AdvicesList");
    },
  });
};

export default UseDeleteAdvice;
