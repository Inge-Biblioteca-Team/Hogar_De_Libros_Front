import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { FinalizeLoan } from "../../Services/SvBookLoan";


 const UseFinishLoan = () => {
    const queryClient = useQueryClient();
  return useMutation(FinalizeLoan, {
    onSuccess: () => {
      toast.success("Exito, préstamo finalizado con éxito.");
      queryClient.invalidateQueries("IPLoans");
    },
    onError: () => {
      toast.error("Error al finalizar el préstamo.");
    },
  });
};


export default UseFinishLoan
