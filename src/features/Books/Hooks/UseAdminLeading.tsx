import { useMutation, useQueryClient } from "react-query";
import { BookLeading } from "../Types/BooksTypes";
import toast from "react-hot-toast";
import { ApiError } from "../../../Types/ApiTypes";
import { LeadingAdminRequestBook } from "../Services/BooksServices";

const UseAdminLeading = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: BookLeading) =>
      toast.promise(LeadingAdminRequestBook(data), {
        loading: "Enviando...",
        success: <span>Éxito, prestamo generado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al enviar la solicitud: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("colection");
    },
  });
};
export default UseAdminLeading;
