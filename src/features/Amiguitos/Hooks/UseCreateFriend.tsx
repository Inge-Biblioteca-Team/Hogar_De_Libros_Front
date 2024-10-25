import { useMutation, useQueryClient } from "react-query";
import { CreateFriends } from "../types/InfoAmiguitos";
import { PostNewFriend } from "../services/SvAmiguitos";
import toast from "react-hot-toast";
import { ApiError } from "../../../Types/ApiTypes";

const UseCreateFriend = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateFriends) =>
      toast.promise(PostNewFriend(data), {
        loading: "Creando solicitud de amigo...",
        success: <span>Solicitud de amigo creada exitosamente.</span>,
        error: (error: ApiError) => (
          <span>Error al crear la solicitud de amigo: {error.message}</span>
        ),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries("FriendList");
    },
  });
};
  
  export default UseCreateFriend;