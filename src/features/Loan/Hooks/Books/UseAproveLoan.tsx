import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { AproveRequest } from "../../Services/SvBookLoan";

const UseAproveLoan = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (bookLoanId: number) => {
      const data = await AproveRequest(bookLoanId);
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("PRLoans");
        toast.success("Préstamo Aprobado", data);
      },
      onError: () => {
        toast.error("Error al aprovar el préstamo.");
      },
    }
  );
};

export default UseAproveLoan;
