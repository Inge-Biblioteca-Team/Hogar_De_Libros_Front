import { useMutation, useQueryClient } from "react-query";
import {RefuseRequest } from "../../Services/SvBookLoan";
import toast from "react-hot-toast";

const UseRefuseLoan = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (bookLoanId: number) => {
      const data = await RefuseRequest(bookLoanId);
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("PRLoans");
        queryClient.invalidateQueries("RLoans");
        queryClient.invalidateQueries("DLoans");
        toast.success("Exito, préstamo cancelado correctamente:", data);
      },
      onError: () => {
        toast.error("Error al cancelar el préstamo.");
      },
    }
  );
};

export default UseRefuseLoan;
