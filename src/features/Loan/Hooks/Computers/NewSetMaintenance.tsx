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
      toast.success("Exito: Estado del equipo cambiado a En Mantenimiento")
    },
    onError: (error) => {
      console.error("Error updating maintenance:", error);
      toast.error("Ha Ocurrido un error")
    },
  });
};

export default NewSetMaintenance;
