import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { FinalizeLoan } from "../../Services/SvBookLoan";
import { finishLoan } from "../../Types/BookLoan";
import { ApiError } from "../../../../Types/ApiTypes";


 const UseFinishLoan = () => {

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: finishLoan) =>
      toast.promise(FinalizeLoan(data), {
        loading: "Espere por favor...",
        success: <span>Éxito, préstamo finalizado con éxito.:</span>,
        error: (error: ApiError) => (
          <span>Error al finalizar el préstamo: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("IPLoans");
    },
  });
};


export default UseFinishLoan
