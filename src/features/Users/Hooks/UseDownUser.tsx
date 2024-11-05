import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { DownUser } from "../Services/SvUsuer";
import { ApiError } from "../../../Types/ApiTypes";

const UseDownUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      toast.promise(DownUser(id), {
        loading: "Deshabilitando...",
        success: <span>Éxito, usuario deshabilitado correctamente.</span>,
        error: (error: ApiError) => (
          <span>Error al deshabilitar el usuario: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("UsersMG");
    },
  });
};

export default UseDownUser;
