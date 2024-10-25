import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../../Types/ApiTypes";
import { NewReservation } from "../../Services/SVReservations";

const PostNewRoomReservation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: NewReservation,
    onSuccess: () => {
      queryClient.invalidateQueries("QueQueReservations");
      queryClient.invalidateQueries("countReservation");
      toast.success("Exito, solicitud de reserva enviada correctamente");
    },
    onError: (error: ApiError) => {
      toast.error("Error al cenviar la solicitud: " + error.message);
    },
  });
};
export default PostNewRoomReservation;
