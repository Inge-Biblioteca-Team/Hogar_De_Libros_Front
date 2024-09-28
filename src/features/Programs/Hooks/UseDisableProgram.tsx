import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { DisableProgram } from "../services/SvPrograms";

const UseDisableProgram = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (Id: string) => {
      const data = await DisableProgram(Id);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("ProgramCatalog");
        toast.success("Estado Actualizado Correctamente");
      },
      onError: (error: ApiError) => {
        toast.error(
          "Error al crear el programa para el Numero de registo " +
            error.message
        );
      },
    }
  );
};

export default UseDisableProgram;
