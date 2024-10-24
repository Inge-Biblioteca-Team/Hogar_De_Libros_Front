import { useMutation, useQueryClient } from "react-query";
import { DenyFriend } from "../Services/SvFriends";
import toast from "react-hot-toast";

const UseDenyFriend = () => {
  const queryClient = useQueryClient();

  return useMutation(DenyFriend, {
    onSuccess: () => {
      toast.success("Solicitud de amigo rechazada.");
      queryClient.invalidateQueries("FriendsMG"); // Invalidamos la consulta de amigos para refrescar la tabla
    },
    onError: () => {
      toast.error("Error al rechazar la solicitud.");
    },
  });
};

export default UseDenyFriend;
