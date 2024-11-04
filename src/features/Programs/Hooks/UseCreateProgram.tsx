import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { Program } from "../types/Programs";
import { PostNewProgram } from "../services/SvPrograms";

const UseCreateProgram = () => {


  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Program) =>
      toast.promise(PostNewProgram(data), {
        loading: "Creando...",
        success: <span>Éxito, programa creado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al crear el programa: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("ProgramCatalog");
    },
  });
};

export default UseCreateProgram;
