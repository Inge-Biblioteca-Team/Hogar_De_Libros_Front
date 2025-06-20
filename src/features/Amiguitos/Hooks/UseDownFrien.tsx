import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { downType } from "../../../Types/GlobalTypes";
import { DownFriend } from "../services/SvFriends";

const UseDownFrien = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: downType) =>
      toast.promise(DownFriend(data), {
        loading: "Creando...",
        success: <span>Amigo dado de baja correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al dar de baja al amigo: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("FriendList");
    },
  });
};
export default UseDownFrien;
