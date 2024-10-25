import { useMutation, useQueryClient } from "react-query";
import { PostNewColaborator } from "../services/SvAmiguitos";
import { Colaborator } from "../types/InfoAmiguitos";
import { ApiError } from "../../../Types/ApiTypes";
import toast from "react-hot-toast";

const useColaborator = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (data: Colaborator) => PostNewColaborator(data),
      onSuccess: () => {
        queryClient.invalidateQueries("FriendList");
        toast.success("Biblioteca de amigos creada exitosamente.");
      },
      onError: (error: ApiError) => {
        toast.error("Error al crear la biblioteca de amigos: " + error.message);
      },
    });
  };
  
  export default useColaborator;