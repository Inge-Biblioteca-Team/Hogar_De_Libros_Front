import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { AproveFriend } from "../services/SvFriends";

const UseAproveFriend = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (id: number) =>
        toast.promise(AproveFriend(id), {
          loading: "Creando...",
          success: <span>Éxito, Solicitud aprobada</span>,
          error: (error: ApiError) => (
            <span>Error al aprobar solicitud: {error.message}</span>
          ),
        }),
      onSuccess() {
        queryClient.invalidateQueries("FriendReqList");
      },
    });
  };
export default UseAproveFriend
