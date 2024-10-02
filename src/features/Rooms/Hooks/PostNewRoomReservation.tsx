import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { NewReservation } from "../Services/SvRooms";

const PostNewRoomReservation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: NewReservation,
    onSuccess: () => {
      queryClient.invalidateQueries("ProgramCatalog");
      toast.success("Programa añadido con éxito!");
    },
    onError: (error: ApiError) => {
      toast.error("Error al crear el programa: " + error.message);
    },
  });
};
export default PostNewRoomReservation;
