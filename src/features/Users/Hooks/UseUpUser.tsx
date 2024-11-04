import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { UpUser } from "../Services/SvUsuer";
import { ApiError } from "../../../Types/ApiTypes";

const UseUpUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      toast.promise(UpUser(id), {
        loading: "Deshabilitando...",
        success: <span>Éxito, usuario rehabilitado correctamente.</span>,
        error: (error: ApiError) => (
          <span>Error al rehabilitar el usuario: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("UsersMG");
    },
  });
};
export default UseUpUser;
