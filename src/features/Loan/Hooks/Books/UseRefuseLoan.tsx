import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { finishLoan } from "../../Types/BookLoan";
import { ApiError } from "../../../../Types/ApiTypes";
import { RefuseRequest } from "../../Services/SvBookLoan";

const UseRefuseLoan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: finishLoan) =>
      toast.promise(RefuseRequest(data), {
        loading: "Espere por favor...",
        success: <span>Éxito, préstamo rechazado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al rechazar el préstamo. {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("PRLoans");
      queryClient.invalidateQueries("RLoans");
      queryClient.invalidateQueries("DLoans");
    },
  });
};

export default UseRefuseLoan;
