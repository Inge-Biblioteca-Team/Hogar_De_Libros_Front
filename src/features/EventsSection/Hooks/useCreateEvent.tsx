import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { PostNewEvent } from "../services/SvEvents";

const useCreateEvent = ({
    Open,
    Reset,
  }: {
    Open: React.Dispatch<React.SetStateAction<boolean>>;
    Reset: () => void;
  }) => {
    const queryClient = useQueryClient();
    
    return useMutation({
      mutationFn: PostNewEvent, 
      onSuccess: () => {
        queryClient.invalidateQueries("EventCatalog"); 
        toast.success("Evento creado con éxito!");
        Open(true); 
        Reset(); 
      },
      onError: (error: unknown) => {
        toast.error("Error al crear el evento: " + (error as any).message); 
      },
    });
  };
  
  export default useCreateEvent;