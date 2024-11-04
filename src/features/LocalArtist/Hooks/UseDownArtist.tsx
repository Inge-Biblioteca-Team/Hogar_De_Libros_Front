import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { DownArtist } from "../services/SvArtist";
import { ApiError } from "../../../Types/ApiTypes";

const UseDownArtist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      toast.promise(DownArtist(id), {
        loading: "Creando...",
        success: <span>Éxito, artista dado de baja correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al dar de baja: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("Artist");
    },
  });
};
export default UseDownArtist;
