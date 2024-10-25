import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { ApiError } from "../../../Types/ApiTypes";
import { CreateFriends } from "../types/InfoAmiguitos";
import { postFriendRequest } from "../services/SvFriends";

  const UseCreateFriend = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: CreateFriends) =>
        toast.promise(postFriendRequest(data), {
          loading: "Creando...",
          success: <span>Éxito, Solicitud enviada.</span>,
          error: (error: ApiError) => (
            <span>Error al enviar solicitud: {error.message}</span>
          ),
        }),
      onSuccess() {
        queryClient.invalidateQueries("ColaborationsList");
      },
    });
  };
  
  export default UseCreateFriend;