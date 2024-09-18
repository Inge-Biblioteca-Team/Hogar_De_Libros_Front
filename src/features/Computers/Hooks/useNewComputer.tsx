import { useMutation, useQueryClient } from "react-query";
import { PostNewComputer } from "../Services/SvComputer";
import toast from "react-hot-toast";

const useNewComputer = ({
  Open,
  Reset,
}: {
  Open: React.Dispatch<React.SetStateAction<boolean>>;
  Reset: () => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: PostNewComputer,
    onSuccess: () => {
      toast.success("Equipo añadido con exito!");
      queryClient.invalidateQueries("EquipCatalog");
      Open(true);
      Reset();
    },
  });
};
export default useNewComputer;
