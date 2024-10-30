import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { markAsRead } from "../Services/SvInbox";

const useRead = () => {
    const queryClient = useQueryClient();
  
    return useMutation(
      async (id_Note: number) => {
        const data = await markAsRead(id_Note);
        return data;
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("Notifications"); 
          toast.success("Notificación marcada como leída");
        },
        onError: (error) => {
          toast.error("Error al marcar la notificación como leída");
          console.error("Error al marcar como leído:", error);
        },
      }
    );
  };
  
  export default useRead;