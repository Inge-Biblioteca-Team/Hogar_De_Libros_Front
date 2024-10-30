import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { deleteFromTrash } from "../../Services/SvInbox";
import { ApiError } from "../../../../Types/ApiTypes";

const useDeleteTrash = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id_Note: number) =>
      toast.promise(deleteFromTrash(id_Note), {
        loading: "Eliminando...",
        success: <span>Notificación eliminada de la papelera.</span>,
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
        console.error("Error al eliminar notificaciones:", error);
      },
    }
  );
};

export default useDeleteTrash;
