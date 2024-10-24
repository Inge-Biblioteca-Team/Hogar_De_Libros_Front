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
          success: <span>Éxito, Solicitud aprobada</span>,
          error: (error: ApiError) => (
            <span>Error al aprobar solicitud: {error.message}</span>
          ),
        }),
      onSuccess() {
        queryClient.invalidateQueries("DonationsReqList");
      },
    });
  };

export default UseAproveDonation
