import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { PatchProgram } from "../services/SvPrograms";

const UseeditProgram = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PatchProgram,
    onSuccess: () => {
      queryClient.invalidateQueries("ProgramCatalog");
      toast.success("Programa editado con éxito!");
    },
    onError: (error: ApiError) => {
      toast.error("Error al editar el programa: " + error.message);
    },
  });
};

export default UseeditProgram;
