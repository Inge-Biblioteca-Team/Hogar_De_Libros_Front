import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { deleteMultipleFromTrash } from "../../Services/SvInbox";
import { ApiError } from "../../../../Types/ApiTypes";

const useDeleteMulTrash = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id_Note: number[]) =>
      toast.promise(deleteMultipleFromTrash(id_Note), {
        loading: "Eliminando...",
        success: <span>Notificaciones eliminadas de la papelera. </span>,
        error: (error: ApiError) => (
          <span>Error al eliminar las notificaciones: {error.message}</span>
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

export default useDeleteMulTrash;
