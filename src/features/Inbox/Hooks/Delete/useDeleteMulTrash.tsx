import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { deleteMultipleFromTrash } from "../../Services/SvInbox";

const useDeleteMulTrash = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id_Note: number[]) => {
      const data = await deleteMultipleFromTrash(id_Note); 
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Notifications"); 
        toast.success("Notificaciones eliminadas definitivamente");
      },
      onError: (error) => {
        toast.error("Error al eliminar las notificaciones");
        console.error("Error al eliminar notificaciones:", error);
      },
    }
  );
};

export default useDeleteMulTrash;
