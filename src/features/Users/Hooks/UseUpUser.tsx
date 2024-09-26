import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { UpUser } from "../Services/SvUsuer";

const UseUpUser = () => {
    const queryClient = useQueryClient();

    return useMutation(UpUser, {
      onSuccess: () => {
        toast.success("Usuario habilitado.");
        queryClient.invalidateQueries("UsersMG");
      },
      onError: () => {
        toast.error("Error al actualizar alhabilitar el Usuario.");
      },
    });
  };
export default UseUpUser
