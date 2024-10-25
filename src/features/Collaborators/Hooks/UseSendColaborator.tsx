import toast from "react-hot-toast";
import { ApiError } from "../../../Types/ApiTypes";
import { useMutation, useQueryClient } from "react-query";
import { postColab } from "../Service/ColabServices";
import { CreateNewColaborator } from "../Types/ColaboratorTypes";

const UseSendColaborator = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateNewColaborator) =>
      toast.promise(postColab(data), {
        loading: "Creando...",
        success: <span>Éxito, Solicitud enviada</span>,
        error: (error: ApiError) => (
          <span>Error al enviar solicitud: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("ColaborationsList");
    },
  });
};

export default UseSendColaborator;
