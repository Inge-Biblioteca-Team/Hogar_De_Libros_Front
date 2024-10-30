import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { DownUser } from "../Services/SvUsuer";

const UseDownUser = () => {
  const queryClient = useQueryClient();

  return useMutation(DownUser, {
    onSuccess: () => {
      toast.success("Éxito, usuario deshabilitado correctamente.");
      queryClient.invalidateQueries("UsersMG");
    },
    onError: () => {
      toast.error("Error al actualizar al deshabilitar el Usuario.");
    },
  });
};

export default UseDownUser;
