import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { BookLeading } from "../Types/BooksTypes";
import { LeadingRequestBook } from "../Services/BooksServices";

const UseLeadingRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: BookLeading) =>
      toast.promise(LeadingRequestBook(data), {
        loading: "Enviando...",
        success: <span>Éxito, solicitud enviada correctamente</span>,
        error: (error: ApiError) => (
          <span>Error enviar la solicitud: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("colection");
    },
  });
};
export default UseLeadingRequest;
