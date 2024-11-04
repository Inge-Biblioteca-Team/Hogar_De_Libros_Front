import { useMutation, useQueryClient } from "react-query";
import { DownFurniture } from "../services/SvFurniture";
import { downType } from "../../../Types/GlobalTypes";
import { ApiError } from "../../../Types/ApiTypes";
import toast from "react-hot-toast";

const UseDownFurniture = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: downType) =>
      toast.promise(DownFurniture(data), {
        loading: "Editando...",
        success: <span>Éxito, mobiliario editado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al editar el mobiliario: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("FurnitureCatalog");
    },
  });
};

export default UseDownFurniture;
