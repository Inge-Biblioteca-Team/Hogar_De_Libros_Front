import { useMutation, useQueryClient } from "react-query";
import { DownEquipment } from "../Services/SvComputer";
import toast from "react-hot-toast";
import { downType } from "../../../Types/GlobalTypes";
import { ApiError } from "../../../Types/ApiTypes";

const UseDownEquip = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: downType) =>
      toast.promise(DownEquipment(data), {
        loading: "Editando...",
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

export default UseDownEquip;
