import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../../Types/ApiTypes";
import { PatchCancelReservation } from "../../Services/SVReservations";

const UseCancelReservation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (Id: number) => {
      const data = await PatchCancelReservation(Id);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("MyReservations");
        toast.success("Exito, reservación cancelada correctamente");
      },
      onError: (error: ApiError) => {
        toast.error("Error al cancelar la reservación: " + error.message);
      },
    }
  );
};

export default UseCancelReservation;
