import { useMutation, useQueryClient } from "react-query";
import { ReactiveWS } from "../../Services/SvComputerLoan";
import toast from "react-hot-toast";

const UseReactiveSW = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ReactiveWS,
    onSuccess: () => {
      queryClient.invalidateQueries("WSStatus");
      toast.success("Éxito, el equipo disponible nuevamente")
    },
    onError: (error) => {
      console.error("Error al reactivar el equipo de cómputo", error);
    },
  });
};

export default UseReactiveSW;
