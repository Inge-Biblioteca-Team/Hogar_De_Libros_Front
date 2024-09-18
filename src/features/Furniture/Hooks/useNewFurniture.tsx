import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { PostNewFurniture } from "../services/SvFurniture";

const useNewComputer = ({
  Open,
  Reset,
}: {
  Open: React.Dispatch<React.SetStateAction<boolean>>;
  Reset: () => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: PostNewFurniture,
    onSuccess: () => {
      queryClient.invalidateQueries("FurnitureCatalog");
      toast.success("Moviliario añadido con exito!");
      Open(true);
      Reset();
    },
  });
};
export default useNewComputer;
