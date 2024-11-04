import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { PostNewEvent } from "../services/SvEvents";
import { Events } from "../types/Events";
import { ApiError } from "../../../Types/ApiTypes";

const useCreateEvent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Events) =>
      toast.promise(PostNewEvent(data), {
        loading: "Creando...",
        success: <span>Éxito, recurso creado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al crear el recurso: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("EventCatalog");
    },
  });
};

export default useCreateEvent;
