import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { downType } from "../../../Types/GlobalTypes";
import { RefueseColab } from "../Service/ColabServices";

const UseRefueseColab = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: downType) =>
      toast.promise(RefueseColab(data), {
        loading: "Guardando...",
        success: <span>Éxito, Rechazado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al rechazar: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("ColaborationsList");
      queryClient.invalidateQueries("ColaborationsAproved");
    },
  });
};

export default UseRefueseColab;
