import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { Advice } from "../Types/Advice";
import { PatchAdvice } from "../Service/SvAdvice";
import { ApiError } from "../../../Types/ApiTypes";

const UseEditAdvice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Advice) =>
      toast.promise(PatchAdvice(data), {
        loading: "Editando...",
        success: <span>Exito, Aviso editado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al editar el aviso: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("AdvicesList");
    },
  });
};

export default UseEditAdvice;
