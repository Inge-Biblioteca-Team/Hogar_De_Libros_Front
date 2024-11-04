import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { createLocalArtist } from "../services/SvArtist";
import { Artist } from "../types/LocalArtist";

const UseCreateArtist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Artist) =>
      toast.promise(createLocalArtist(data), {
        loading: "Creando...",
        success: <span>Éxito, artista añadido correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al crear el artista: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("Artist");
    },
  });
};
export default UseCreateArtist;
