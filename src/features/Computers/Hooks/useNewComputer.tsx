import { useMutation } from "react-query";
import { PostNewComputer } from "../Services/SvComputer";
import toast from "react-hot-toast";

const useNewComputer = ({
  Open,
  Reset,
}: {
  Open: React.Dispatch<React.SetStateAction<boolean>>;
  Reset: () => void;
}) => {
  return useMutation({
    mutationFn: PostNewComputer,
    onSuccess: () => {
      toast.success("Equipo añadido con exito!");
      Open(true)
      Reset()
    },
  });
};
export default useNewComputer;
