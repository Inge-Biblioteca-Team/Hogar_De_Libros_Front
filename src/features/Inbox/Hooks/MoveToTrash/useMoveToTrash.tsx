import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { moveToTrash } from "../../Services/SvInbox";
import { ApiError } from "../../../../Types/ApiTypes";

const useMoveToTrash = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id_Note: number) =>
      toast.promise(moveToTrash(id_Note), {
        loading: "Moviendo...",
        success: <span>Notificación enviada a la papelera..</span>,
        error: (error: ApiError) => (
          <span>Error al eliminar la notificación: {error.message}</span>
        ),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Notifications");
        queryClient.invalidateQueries("ReadNotifications");
        queryClient.invalidateQueries("TrashNotifications");
      },
      onError: (error) => {
        console.error("Error al mover la notificación a la papelera:", error);
      },
    }
  );
};
export default useMoveToTrash;
