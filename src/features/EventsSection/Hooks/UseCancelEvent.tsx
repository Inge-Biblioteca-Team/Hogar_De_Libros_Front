import { useMutation, useQueryClient } from "react-query";
import { cancelEvent } from "../services/SvEvents";
import toast from "react-hot-toast";
import { ApiError } from "../../../Types/ApiTypes";

const UseCancelEvent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      toast.promise(cancelEvent(id), {
        loading: "Cancelando...",
        success: <span>Éxito, evento cancelado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al cancelar el evento: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("EventCatalog");
    },
  });
};

export default UseCancelEvent;
