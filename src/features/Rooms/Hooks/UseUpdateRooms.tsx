import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { EDITINGROOMS } from "../Services/SvRooms";

const UseUpdateRoom = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: EDITINGROOMS,
      onSuccess: () => {
        queryClient.invalidateQueries("Rooms");
        toast.success("Éxito, sala editada correctamente");
      },
      onError: (error: ApiError) => {
        toast.error("Error al editar la sala: " + error.message);
      },
    });
  };

export default UseUpdateRoom;