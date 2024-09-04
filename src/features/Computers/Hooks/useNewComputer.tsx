import { useMutation } from "react-query";
import { PostNewComputer } from "../Services/SvComputer";
import toast from "react-hot-toast";

const useNewComputer = () => {
  return useMutation({
    mutationFn: PostNewComputer,
    onSuccess: () => {
      toast.success("Equipo añadido con exito!");
    },
  });
};
export default useNewComputer;
