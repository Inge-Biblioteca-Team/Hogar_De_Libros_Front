import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { recoverMultipleFromTrash } from "../../Services/SvInbox";

const useRecoverMulTrash = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id_Note: number[]) => {
      const data = await recoverMultipleFromTrash(id_Note);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("TrashNotifications"); 
        toast.success("Notificaciones recuperadas de la papelera");
      },
      onError: (error) => {
        toast.error("Error al recuperar las notificaciones de la papelera");
        console.error("Error al recuperar notificaciones:", error);
      },
    }
  );
};

export default useRecoverMulTrash;

