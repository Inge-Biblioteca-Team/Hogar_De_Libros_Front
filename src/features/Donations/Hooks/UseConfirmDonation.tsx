import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { downType } from "../../../Types/GlobalTypes";
import { ConfirmDonation } from "../Service/SVDonations";

const UseConfirmDonation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: downType) =>
      toast.promise(ConfirmDonation(data), {
        loading: "Creando...",
        success: <span>Exito, se confirmo la recolección del donativo correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al confirmar la recolección del donativo: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("PendingRecolection");
    },
  });
};

export default UseConfirmDonation;
