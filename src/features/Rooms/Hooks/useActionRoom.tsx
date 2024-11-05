import toast from "react-hot-toast";
import { ActionRoom } from "../Services/SvRooms";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { downType } from "../../../Types/GlobalTypes";

const useActionRoom = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: downType) =>
      toast.promise(ActionRoom(data.Id, data.reason), {
        loading: "Creando...",
        success: <span>Éxito, sala creada correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al crear el recurso: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("Rooms");
      queryClient.invalidateQueries("QueQueReservations");
    },
  });
};

export default useActionRoom;
