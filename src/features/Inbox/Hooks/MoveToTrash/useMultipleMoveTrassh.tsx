import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { moveMultipleToTrash } from "../../Services/SvInbox";
import { ApiError } from "../../../../Types/ApiTypes";

const useMultipleMoveToTrash = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id_Note: number[]) =>
      toast.promise(moveMultipleToTrash(id_Note), {
        loading: "Moviendo...",
        success: <span>Notificaciones enviada a la papelera. </span>,
        error: (error: ApiError) => (
          <span>Error al mover las notificaciones: {error.message}</span>
        ),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Notifications");
        queryClient.invalidateQueries("ReadNotifications");
        queryClient.invalidateQueries("TrashNotifications");
        queryClient.invalidateQueries("MessageCount");
      },
      onError: (error) => {
        console.error("Error al mover las notificaciones:", error);
      },
    }
  );
};

export default useMultipleMoveToTrash;
