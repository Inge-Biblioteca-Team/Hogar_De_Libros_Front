import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { PostNewProgram } from "../services/SvPrograms";

const UseCreateProgram = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PostNewProgram,
    onSuccess: () => {
      queryClient.invalidateQueries("ProgramCatalog");
      toast.success("Exito, Programa añadido correctamente");
    },
    onError: (error: ApiError) => {
      toast.error("Error al crear el programa: " + error.message);
    },
  });
};

export default UseCreateProgram;
