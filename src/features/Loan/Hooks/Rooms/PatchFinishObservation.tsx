import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../../Types/ApiTypes";
import { PatchEndReservation } from "../../Services/SVReservations";

const PatchFinishObservation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PatchEndReservation,
    onSuccess: () => {
      queryClient.invalidateQueries("ProgramCatalog");
      toast.success("Programa añadido con éxito!");
    },
    onError: (error: ApiError) => {
      toast.error("Error al crear el programa: " + error.message);
    },
  });
};
export default PatchFinishObservation;
