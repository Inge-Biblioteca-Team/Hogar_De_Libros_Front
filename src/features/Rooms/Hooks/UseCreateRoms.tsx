import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { ADDINGROOMS } from "../Services/SvRooms";

const UseCreateRooms = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ADDINGROOMS,
    onSuccess: () => {
      queryClient.invalidateQueries("Rooms");
      toast.success("Sala añadida con éxito!");
    },
    onError: (error: ApiError) => {
      toast.error("Error al crear la sala: " + error.message);
    },
  });
};

export default UseCreateRooms;