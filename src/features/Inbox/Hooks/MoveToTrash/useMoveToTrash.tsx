import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { moveToTrash } from "../../Services/SvInbox";

const useMoveToTrash = () => {
    const queryClient = useQueryClient();
  
    return useMutation(
      async (id_Note: number) => {
        const data = await moveToTrash(id_Note);
        return data;
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("Notifications"); 
          toast.success("Notificación movida a la papelera");
        },
        onError: (error) => {
          toast.error("Error al mover la notificación a la papelera");
          console.error("Error al mover a papelera:", error);
        },
      }
    );
  };
  
  export default useMoveToTrash;