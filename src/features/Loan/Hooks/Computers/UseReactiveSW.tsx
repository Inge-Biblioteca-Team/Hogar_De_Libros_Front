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
      toast.success("Equipo nuevamente Disponible")
    },
    onError: (error) => {
      console.error("Error reactivating machine:", error);
    },
  });
};

export default UseReactiveSW;
