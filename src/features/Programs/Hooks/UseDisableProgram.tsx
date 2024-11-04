import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { DisableProgram } from "../services/SvPrograms";

const UseDisableProgram = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      toast.promise(DisableProgram(id), {
        loading: "Deshabilitando...",
        success: <span>Éxito, se deshabilitó el programa correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al deshabilitar el programa: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("ProgramCatalog");
    },
  });
};

export default UseDisableProgram;
