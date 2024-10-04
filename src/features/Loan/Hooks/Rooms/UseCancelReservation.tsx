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
        toast.success("Estado de la reservacion modificado con exito!");
      },
      onError: (error: ApiError) => {
        toast.error("Error al actualizar estado: " + error.message);
      },
    }
  );
};

export default UseCancelReservation;
