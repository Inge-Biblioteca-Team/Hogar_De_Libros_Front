import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../../Types/ApiTypes";
import { NewReservation } from "../../Services/SVReservations";
import { Reservation } from "../../Types/RoomsReservations";

const PostNewRoomReservation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Reservation) =>
      toast.promise(NewReservation(data), {
        loading: "Creando...",
        success: <span>Éxito, Solicitud enviada correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al enviar la solicitud: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("QueQueReservations");
      queryClient.invalidateQueries("countReservation");
    },
  });
};
export default PostNewRoomReservation;
