import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { deleteFromTrash } from "../../Services/SvInbox";

const useDeleteTrash = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id_Note: number) => {
      const data = await deleteFromTrash(id_Note);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Notifications"); 
        toast.success("Notificación eliminada de la papelera");
      },
      onError: (error) => {
        toast.error("Error al eliminar la notificación de la papelera");
        console.error("Error al eliminar notificación:", error);
      },
    }
  );
};

export default useDeleteTrash;
