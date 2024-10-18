import { useMutation, useQueryClient } from "react-query";
import { FinalizeLoan } from "../../Services/SvComputerLoan";
import toast from "react-hot-toast";

const UseFinalizeSWLoan = () => {
  const queryClient = useQueryClient(); 
  return useMutation({
    mutationFn: FinalizeLoan,
    onSuccess: () => {
      queryClient.invalidateQueries("WSStatus");
      toast.success("Exito: El Equipo está nuevamente disponible")
    },
    onError: (error: Error) => {
      console.error("Error finalizing loan:", error);
    },
  });
};

export default UseFinalizeSWLoan;
