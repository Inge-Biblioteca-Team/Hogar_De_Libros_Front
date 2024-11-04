import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { PatchProgram } from "../services/SvPrograms";
import { Program } from "../types/Programs";

const UseeditProgram = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: Program) =>
      toast.promise(PatchProgram(id), {
        loading: "Editando...",
        success: <span>Éxito, se edito el programa correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al editar el programa: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("ProgramCatalog");
    },
  });
};

export default UseeditProgram;
