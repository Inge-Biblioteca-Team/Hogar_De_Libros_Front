import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ExtendBookLeading } from "../../../Books/Types/BooksTypes";
import { ApiError } from "../../../../Types/ApiTypes";
import { LeadingRequestBookExtended } from "../../Services/SvBookLoan";

const UseLeadingRequestBookExtended = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ExtendBookLeading) =>
      toast.promise(LeadingRequestBookExtended(data), {
        loading: "Enviando...",
        success: <span>Éxito, solicitud enviada correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al enviar la solicitud: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("DLoans");
      queryClient.invalidateQueries("PLoans");
      queryClient.invalidateQueries("RLoans");
    },
  });
};
export default UseLeadingRequestBookExtended;