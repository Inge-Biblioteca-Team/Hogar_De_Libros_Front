import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { recoverFromTrash } from "../../Services/SvInbox";
import { ApiError } from "../../../../Types/ApiTypes";

const useRecoverFromTrash = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id_Note: number) =>
      toast.promise(recoverFromTrash(id_Note), {
        loading: "Moviendo...",
        success: <span>Notificación recuperada con éxito. </span>,
        error: (error: ApiError) => (
          <span>Error al recuperar: {error.message}</span>
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
export default useRecoverFromTrash;
