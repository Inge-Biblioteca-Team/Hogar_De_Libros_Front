import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { DownArtist } from "../services/SvArtist";

const UseDownArtist = () => {
  const queryClient = useQueryClient();

  return useMutation(DownArtist, {
    onSuccess: () => {
      toast.success("Exito, artista deshabilitado correctamente.");
      queryClient.invalidateQueries("LocalArtistMG");
    },
    onError: () => {
      toast.error("Error deshabilitar el artista.");
    },
  });
};

export default UseDownArtist;