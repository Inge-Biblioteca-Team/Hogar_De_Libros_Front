import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { Room } from "../Types/Room_Interface";
import { UpdateRoom } from "../Services/SvRooms";

const UseUpdateRoom = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Room) =>
      toast.promise(UpdateRoom(data), {
        loading: "Creando...",
        success: <span>Éxito, sala editada correctamente</span>,
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
export default UseUpdateRoom;
