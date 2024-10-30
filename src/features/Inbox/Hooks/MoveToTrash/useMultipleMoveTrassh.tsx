import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { moveMultipleToTrash } from "../../Services/SvInbox";

const useMultipleMoveToTrash = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id_Note: number[]) => {
      const data = await moveMultipleToTrash(id_Note);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Notifications");
        toast.success("Notificaciones movidas a la papelera");
      },
      onError: (error) => {
        toast.error("Error al mover las notificaciones a la papelera");
        console.error("Error al mover a papelera:", error);
      },
    }
  );
};

export default useMultipleMoveToTrash;
