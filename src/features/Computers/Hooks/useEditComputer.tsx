import { useMutation, useQueryClient } from "react-query";
import { Equipment} from "../types/Computer";
import { PutEditEquipment } from "../Services/SvComputer";
import toast from "react-hot-toast";
import { ApiError } from "../../../Types/ApiTypes";

const useEditComputer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Equipment) =>
      toast.promise(PutEditEquipment(data), {
        loading: "Creando...",
        success: <span>Éxito, componente editado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al editar el componente: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("EquipCatalog");
    },
  });
};
export default useEditComputer;
