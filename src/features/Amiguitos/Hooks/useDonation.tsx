import { useMutation, useQueryClient } from "react-query";
import { Donation } from "../types/InfoAmiguitos";
import { PostNewDonation } from "../services/SvAmiguitos";
import toast from "react-hot-toast";
import { ApiError } from "../../../Types/ApiTypes";

const useDonation = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (data: Donation) => PostNewDonation(data),
      onSuccess: () => {
        queryClient.invalidateQueries("FriendList");
        toast.success("Biblioteca de amigos creada exitosamente.");
      },
      onError: (error: ApiError) => {
        toast.error("Error al crear la biblioteca de amigos: " + error.message);
      },
    });
  };
  
  export default useDonation;