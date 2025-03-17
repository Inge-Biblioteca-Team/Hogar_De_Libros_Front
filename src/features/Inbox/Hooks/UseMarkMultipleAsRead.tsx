import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { moveMultipleToRead } from "../Services/SvInbox";
import toast from "react-hot-toast";

const UseMarkMultipleAsRead = () => {
    const queryClient = useQueryClient();

    return useMutation(
      async (id_Note: number[]) =>
        toast.promise(moveMultipleToRead(id_Note), {
          loading: "Moviendo...",
          success: <span>Notificaciones marcadas como leídas. </span>,
          error: (error: ApiError) => (
            <span>Error al marcar como leídas: {error.message}</span>
          ),
        }),
      {
        onSuccess: () => {
          queryClient.invalidateQueries("Notifications");
          queryClient.invalidateQueries("ReadNotifications");
          queryClient.invalidateQueries("TrashNotifications");
        },
        onError: (error) => {
          console.error("Error al eliminar las notificaciones:", error);
        },
      }
    );
  };

export default UseMarkMultipleAsRead
