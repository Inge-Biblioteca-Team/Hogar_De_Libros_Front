import { useMutation, useQueryClient } from "react-query";
import { ReactiveWS } from "../../Services/SvComputerLoan";
import toast from "react-hot-toast";

const UseReactiveSW = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ReactiveWS,
    onSuccess: (data) => {
      console.log("Machine reactivated successfully:", data);
      queryClient.invalidateQueries("WSStatus");
      toast.success("Exito, el equipo disponible nuevamente")
    },
    onError: (error) => {
      console.error("Error al reactivar el equipo de cómputo", error);
    },
  });
};

export default UseReactiveSW;
