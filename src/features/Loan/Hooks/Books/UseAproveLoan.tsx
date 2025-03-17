import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { AproveRequest } from "../../Services/SvBookLoan";
import { finishLoan } from "../../Types/BookLoan";
import { ApiError } from "../../../../Types/ApiTypes";

const UseAproveLoan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: finishLoan) =>
      toast.promise(AproveRequest(data), {
        loading: "Espere por favor...",
        success: <span>Éxito, se aprobó el préstamo correctamente:</span>,
        error: (error: ApiError) => (
          <span>Error al aprobar el préstamo: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("PRLoans");
    },
  });
};
export default UseAproveLoan;
