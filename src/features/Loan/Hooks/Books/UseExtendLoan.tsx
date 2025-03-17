import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { PatchLoan } from "../../Services/SvBookLoan"; 
import { ChangeExpiredDate } from "../../Types/BookLoan"; 

const UseExtendLoan = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (Loan: ChangeExpiredDate) => PatchLoan(Loan),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("IPLoans");
        toast.success("Éxito, Fecha de expiración actualizada exitosamente.");
      },
      onError: () => {
        toast.error("Error al actualizar la fecha de expiración.");
      },
    }
  );
};

export default UseExtendLoan;
