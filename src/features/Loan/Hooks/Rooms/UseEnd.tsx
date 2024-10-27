import { useMutation, useQueryClient } from "react-query";
import { PatchEndReservation } from "../../Services/SVReservations";
import toast from "react-hot-toast";
import { ApiError } from "../../../../Types/ApiTypes";

const UseEnd = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PatchEndReservation,
    onSuccess: () => {
      queryClient.invalidateQueries("ProgramCatalog");
      toast.success("Exito, programa añadido correctamente");
    },
    onError: (error: ApiError) => {
      toast.error("Error al crear el programa: " + error.message);
    },
  });
};

export default UseEnd;
