
// src/hooks/useFinalizeLoan.ts
import { useMutation, useQueryClient } from "react-query";
import { FinalizeLoan } from "../Services/SvBookLoan";
import toast from "react-hot-toast";


 const UseFinishLoan = () => {
    const queryClient = useQueryClient();
  return useMutation(FinalizeLoan, {
    onSuccess: () => {
      toast.success("Préstamo finalizado con éxito.");
      queryClient.invalidateQueries("IPLoans");
    },
    onError: () => {
      toast.error("Error al finalizar el préstamo.");
    },
  });
};


export default UseFinishLoan
