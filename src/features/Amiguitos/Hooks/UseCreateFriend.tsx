import { useMutation, useQueryClient } from "react-query";
import { CreateFriends } from "../types/InfoAmiguitos";
import { PostNewFriend } from "../services/SvAmiguitos";
import toast from "react-hot-toast";

interface ApiError {
    message: string;
    error: string;
    statusCode: number;
  }
  
  const UseCreateFriend = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (data: CreateFriends) => PostNewFriend(data),
      onSuccess: () => {
        // Invalidar cualquier query relacionada con amigos (si es necesario)
        queryClient.invalidateQueries("FriendCatalog");
        toast.success("Biblioteca de amigos creada exitosamente.");
      },
      onError: (error: ApiError) => {
        toast.error("Error al crear la biblioteca de amigos: " + error.message);
      },
    });
  };
  
  export default UseCreateFriend;