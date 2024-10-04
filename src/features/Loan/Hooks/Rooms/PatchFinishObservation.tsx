import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../../Types/ApiTypes";
import { PatchEndReservation } from "../../Services/SVReservations";

const PatchFinishObservation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PatchEndReservation,
    onSuccess: () => {
      queryClient.invalidateQueries("QueQueReservations");
      queryClient.invalidateQueries("reserveRequest");
      toast.success("Reservacion finalizada con exito!");
    },
    onError: (error: ApiError) => {
      toast.error("Error al finlizar la reservacion: " + error.message);
    },
  });
};
export default PatchFinishObservation;
