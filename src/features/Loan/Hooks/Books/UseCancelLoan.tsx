import { useMutation, useQueryClient } from "react-query";
import { CancelRequest } from "../../Services/SvBookLoan";
import toast from "react-hot-toast";
import { ApiError } from "../../../../Types/ApiTypes";
import { finishLoan } from "../../Types/BookLoan";

const UseCancelLoan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data:finishLoan) =>
      toast.promise(CancelRequest(data), {
        loading: "Cancelando...",
        success: <span>Éxito, se canceló el préstamo correctamente.</span>,
        error: (error: ApiError) => (
          <span>Error al cancelar el préstamo: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("PRLoans");
      queryClient.invalidateQueries("RLoans");
      queryClient.invalidateQueries("DLoans");
    },
  });
};


export default UseCancelLoan;
