import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { resetPassword } from "../Services/SVAuth";
import { recovery } from "../Type/Recovery";
import { ApiError } from "../../../Types/ApiTypes";
import { useNavigate } from "react-router-dom";

const UseRecovery = () => {
  const queryClient = useQueryClient();
  const navi = useNavigate();
  return useMutation({
    mutationFn: (data: recovery) =>
      toast.promise(resetPassword(data), {
        loading: "Cargando...",
        success: <span>Éxito, se modifico la contraseña correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al cambiar contraseña: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("CourseMG");
      navi("/IniciarSesion", { replace: true });
    },
  });
};

export default UseRecovery;
