import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { editEvent } from "../services/SvEvents";
import { Events } from "../types/Events";

const UseEditEvent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Events) =>
      toast.promise(editEvent(data), {
        loading: "Editando...",
        success: <span>Éxito, evento editado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al editar el evento: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("EventCatalog");
    },
  });
};

export default UseEditEvent;
