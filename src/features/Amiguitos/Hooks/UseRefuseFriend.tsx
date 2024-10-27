import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { downType } from "../../../Types/GlobalTypes";
import { RefuseFriend } from "../services/SvFriends";

const UseRefuseFriend = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: downType) =>
      toast.promise(RefuseFriend(data), {
        loading: "Creando...",
        success: <span>Solicitud rechazada exitosamente</span>,
        error: (error: ApiError) => (
          <span>Error al rechazar solicitud: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("FriendReqList");
    },
  });
};

export default UseRefuseFriend;
