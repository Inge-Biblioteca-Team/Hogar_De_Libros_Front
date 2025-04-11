import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { BookLeading } from "../../Books/Types/BooksTypes";
import { LeadingRequestBookChildren } from "../Services/ChildrenServices";
import { ApiError } from "../../../Types/ApiTypes";

const UseNewChildLoan =  () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: BookLeading) =>
        toast.promise(LeadingRequestBookChildren(data), {
          loading: "Enviando...",
          success: <span>Éxito, solicitud enviada correctamente</span>,
          error: (error: ApiError) => (
            <span>Error al enviar la solicitud: {error.message}</span>
          ),
        }),
      onSuccess() {
        queryClient.invalidateQueries("colection");
      },
    });
  };

export default UseNewChildLoan
