import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { postDonation } from "../Service/SVDonations";
import { NewDonation } from "../Types/DonationType";

const UseCreateDonation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: NewDonation) =>
      toast.promise(postDonation(data), {
        loading: "Creando...",
        success: <span>Éxito, Solicitud enviada</span>,
        error: (error: ApiError) => (
          <span>Error al enviar solicitud: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("ColaborationsList");
    },
  });
};
export default UseCreateDonation;
