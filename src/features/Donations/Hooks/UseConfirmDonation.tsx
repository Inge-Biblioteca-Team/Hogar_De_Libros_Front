import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { downType } from "../../../Types/GlobalTypes";
import { DownFriend } from "../../Amiguitos/services/SvFriends";

const UseConfirmDonation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: downType) =>
      toast.promise(DownFriend(data), {
        loading: "Creando...",
        success: <span>Amigo dado de baja correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al rechazar dar de baja: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("FriendList");
    },
  });
};

export default UseConfirmDonation;
