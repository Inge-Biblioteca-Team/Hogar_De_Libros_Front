import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { downType } from "../../../Types/GlobalTypes";
import { DenyDonation } from "../Service/SVDonations";

const UseRefuseDonation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: downType) =>
      toast.promise(DenyDonation(data), {
        loading: "Creando...",
        success: <span>Exito, solicitud de donación rechazada correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al rechazar la solicitud de donación: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("DonationsRequest");
    },
  });
};

export default UseRefuseDonation;
