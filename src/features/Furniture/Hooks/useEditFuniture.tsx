import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { furniture} from "../type/furniture";
import { PatchEditFurniture } from "../services/SvFurniture";
import { ApiError } from "../../../Types/ApiTypes";

const useEditFurniture = () => {

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: furniture) =>
      toast.promise(PatchEditFurniture(data), {
        loading: "Editando...",
        success: <span>Éxito,mobiliario editado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al editar el mobiliario: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("FurnitureCatalog");
    },
  });
};

  export default useEditFurniture;

  