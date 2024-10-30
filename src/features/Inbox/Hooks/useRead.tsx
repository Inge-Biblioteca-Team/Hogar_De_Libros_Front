import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { markAsRead } from "../Services/SvInbox";
import { ApiError } from "../../../Types/ApiTypes";

const useRead = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id_Note: number) =>
      toast.promise(markAsRead(id_Note), {
        loading: "Eliminando...",
        success: <span>Notificación marcada como leída. </span>,
        error: (error: ApiError) => (
          <span>Error al marcar como leída: {error.message}</span>
        ),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Notifications");
        queryClient.invalidateQueries("ReadNotifications");
        queryClient.invalidateQueries("TrashNotifications");
      },
      onError: (error) => {
        console.error("Error al eliminar notificaciones:", error);
      },
    }
  );
};

export default useRead;
