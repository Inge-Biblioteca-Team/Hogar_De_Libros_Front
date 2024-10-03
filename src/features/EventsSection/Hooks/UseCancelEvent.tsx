import { useMutation, useQueryClient } from "react-query";
import { cancelEvent } from "../services/SvEvents";
import toast from "react-hot-toast";
import { ApiError } from "../../../Types/ApiTypes";

const UseCancelEvent = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (Id: number) => {
      const data = await cancelEvent(Id);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("EventCatalog");
        toast.success("Estado Actualizado Correctamente");
      },
      onError: (error: ApiError) => {
        toast.error(error.message);
      },
    }
  );
};

export default UseCancelEvent;
