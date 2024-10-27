import { useMutation, useQueryClient } from "react-query";
import { CancelRequest } from "../../Services/SvBookLoan";
import toast from "react-hot-toast";

const UseCancelLoan = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (bookLoanId: number) => {
      const data = await CancelRequest(bookLoanId);
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("PRLoans");
        queryClient.invalidateQueries("RLoans");
        queryClient.invalidateQueries("DLoans");
        toast.success("Exito, se canceló el préstamo correctamente:", data);
      },
      onError: () => {
        toast.error("Error al cancelar el préstamo.");
      },
    }
  );
};

export default UseCancelLoan;
