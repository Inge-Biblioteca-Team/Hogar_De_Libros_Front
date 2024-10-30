import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { recoverMultipleFromTrash } from "../../Services/SvInbox";
import { ApiError } from "../../../../Types/ApiTypes";

const useRecoverMulTrash = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id_Note: number[]) =>
      toast.promise(recoverMultipleFromTrash(id_Note), {
        loading: "Moviendo...",
        success: <span>Notificaciones recuperadas. </span>,
        error: (error: ApiError) => (
          <span>Error al recuperar los mensajes: {error.message}</span>
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

export default useRecoverMulTrash;
