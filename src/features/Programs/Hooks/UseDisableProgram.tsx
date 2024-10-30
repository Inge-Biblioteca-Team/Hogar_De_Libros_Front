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
        toast.success("Exito, se deshabilitó el programa correctamente");
      },
      onError: (error: ApiError) => {
        toast.error(
          "Error al deshabilitar el programa" +
            error.message
        );
      },
    }
  );
};

export default UseDisableProgram;
