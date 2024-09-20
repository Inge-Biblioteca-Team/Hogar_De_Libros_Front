import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { DownArtist } from "../services/SvArtist";

const UseDownArtist = () => {
  const queryClient = useQueryClient();

  return useMutation(DownArtist, {
    onSuccess: () => {
      toast.success("Artista deshabilitado.");
      queryClient.invalidateQueries("LocalArtistMG");
    },
    onError: () => {
      toast.error("Error al actualizar al deshabilitar el Artista.");
    },
  });
};

export default UseDownArtist;