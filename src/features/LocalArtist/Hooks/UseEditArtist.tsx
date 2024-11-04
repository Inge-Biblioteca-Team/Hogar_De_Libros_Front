import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { Artist} from "../types/LocalArtist";
import { editArtist } from "../services/SvArtist";

const UseEditArtist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Artist) =>
      toast.promise(editArtist(data), {
        loading: "Editando...",
        success: <span>Éxito, artista editado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al editar: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("Artist");
    },
  });
};

export default UseEditArtist;
