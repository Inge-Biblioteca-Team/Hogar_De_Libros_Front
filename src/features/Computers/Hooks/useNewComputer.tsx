import { useMutation, useQueryClient } from "react-query";
import { PostNewComputer } from "../Services/SvComputer";
import toast from "react-hot-toast";
import { Equipment } from "../types/Computer";
import { ApiError } from "../../../Types/ApiTypes";

const useNewComputer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Equipment) =>
      toast.promise(PostNewComputer(data), {
        loading: "Creando...",
        success: <span>Éxito, componente creado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al crear el componente: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("EquipCatalog");
    },
  });
};

export default useNewComputer;
