import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { PostNewFurniture } from "../services/SvFurniture";
import { ApiError } from "../../../Types/ApiTypes";
import { furniture } from "../type/furniture";

const useNewFurniture = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: furniture) =>
      toast.promise(PostNewFurniture(data), {
        loading: "Creando...",
        success: <span>Éxito, mobiliario creado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al crear el mobiliario: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("FurnitureCatalog");
    },
  });
};
export default useNewFurniture;
