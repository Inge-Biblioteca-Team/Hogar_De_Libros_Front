import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { recoverFromTrash } from "../../Services/SvInbox";

const useRecoverFromTrash = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id_Note: number) => {
      const data = await recoverFromTrash(id_Note);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Notifications");
        toast.success("Notificación recuperada de la papelera");
      },
      onError: (error) => {
        toast.error("Error al recuperar la notificación de la papelera");
        console.error("Error al recuperar notificación:", error);
      },
    }
  );
};

export default useRecoverFromTrash;
