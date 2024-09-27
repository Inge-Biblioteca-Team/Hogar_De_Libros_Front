import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { PostNewEvent } from "../services/SvEvents";


interface ApiError {
  message: string;
  error: string;
  statusCode: number;
}

const useCreateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PostNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries("EventCatalog");
      toast.success("Evento creado con éxito!");
    },
    onError: (error: ApiError) => {
      toast.error("Error al crear el evento: " + (error).message);
    },
  });
};

export default useCreateEvent;
