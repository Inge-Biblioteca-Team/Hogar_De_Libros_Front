import { useMutation, useQueryClient } from "react-query";
import { AproveDonation } from "../Service/SVDonations";
import toast from "react-hot-toast";
import { ApiError } from "../../../Types/ApiTypes";

const UseAproveDonation = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (id: number) =>
        toast.promise(AproveDonation(id), {
          loading: "Creando...",
          success: <span>Éxito, solicitud de donación aprobada</span>,
          error: (error: ApiError) => (
            <span>Error al aprobar la solicitud de donación: {error.message}</span>
          ),
        }),
      onSuccess() {
        queryClient.invalidateQueries("DonationsRequest");
      },
    });
  };

export default UseAproveDonation
