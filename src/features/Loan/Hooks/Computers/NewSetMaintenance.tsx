import { useMutation, useQueryClient } from "react-query";
import { MantenanceWS } from "../../Services/SvComputerLoan";
import { NewWSMantenance } from "../../Types/ComputerLoan";
import toast from "react-hot-toast";

const NewSetMaintenance = () => {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: NewWSMantenance) => MantenanceWS(data),
    onSuccess: () => {
      queryClient.invalidateQueries("WSStatus");
      toast.success("Exito, estado del equipo cambiado a en mantenimiento")
    },
    onError: (error) => {
      console.error("Error updating maintenance:", error);
      toast.error("Error, ocurrió un error al cambiar el estado del equipo a en mantenimiento");
    },
  });
};

export default NewSetMaintenance;
