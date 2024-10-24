import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { EditFriend } from "../services/SvFriends";
import { Friend } from "../types/FriendType";

const UseEditFriend = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Friend) =>
      toast.promise(EditFriend(data), {
        loading: "Guardando...",
        success: <span>Amigo editado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al editar amigo: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("FriendList");
    },
  });
};

export default UseEditFriend;
