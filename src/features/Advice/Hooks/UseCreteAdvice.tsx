import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { Advice } from "../Types/Advice";
import { CreateAdvice } from "../Service/SvAdvice";
import { ApiError } from "../../../Types/ApiTypes";

const UseCreateAdvice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Advice) =>
      toast.promise(CreateAdvice(data), {
        loading: "Creando...",
        success: <span>Éxito, aviso creado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al crear el aviso: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("AdvicesList");
    },
  });
};

export default UseCreateAdvice;
