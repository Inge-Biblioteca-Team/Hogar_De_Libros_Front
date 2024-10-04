import { useMutation, useQueryClient } from "react-query";
import { PatchResolveReservation } from "../../Services/SVReservations";
import toast from "react-hot-toast";
import { ApiError } from "../../../../Types/ApiTypes";

const UseRefuese = ( actions: string ) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (Id: number) => {
      const data = await PatchResolveReservation(Id, actions);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("ProgramCatalog");
        toast.success("Reservacion Actualizada con exito!");
      },
      onError: (error: ApiError) => {
        toast.error("Error al actualizar estado: " + error.message);
      },
    }
  );
};

export default UseRefuese;
