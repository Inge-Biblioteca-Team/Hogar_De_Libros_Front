import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { Room } from "../Types/Room_Interface";
import { PostNewRoom } from "../Services/SvRooms";

const UseCreateRooms = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Room) =>
      toast.promise(PostNewRoom(data), {
        loading: "Creando...",
        success: <span>Éxito, sala registrada correctamente</span>,
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

export default UseCreateRooms;
