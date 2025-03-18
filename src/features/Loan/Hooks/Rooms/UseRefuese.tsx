import { useMutation, useQueryClient } from "react-query";
import { PatchResolveReservation } from "../../Services/SVReservations";
import toast from "react-hot-toast";
import { ApiError } from "../../../../Types/ApiTypes";

const UseRefuese = () => {

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: {id:number, acction:string}) =>
      toast.promise(PatchResolveReservation(data), {
        loading: "Por favor espere...",
        success: <span>¡Éxito! Estado de la reservación modificado correctamente.</span>,
        error: (error: ApiError) => (
          <span>Error al actualizar estado: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("reserveRequest");
      queryClient.invalidateQueries("PendingRreservations");
    },
  });
};


export default UseRefuese;
