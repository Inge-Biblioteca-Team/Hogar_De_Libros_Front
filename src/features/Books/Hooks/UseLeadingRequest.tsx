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
        loading: "Creando...",
        success: <span>Éxito, recurso creado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al crear el recurso: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("colection");
    },
  });
};
export default UseLeadingRequest;
