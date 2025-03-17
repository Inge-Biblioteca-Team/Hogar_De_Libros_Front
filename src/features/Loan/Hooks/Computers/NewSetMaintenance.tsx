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
      toast.success("Éxito, estado del equipo cambiado a 'En mantenimiento'")
    },
    onError: (error) => {
      console.error("Error updating maintenance:", error);
      toast.error("Error, ocurrió un problema al cambiar el estado del equipo a 'En mantenimiento'");
    },
  });
};

export default NewSetMaintenance;
