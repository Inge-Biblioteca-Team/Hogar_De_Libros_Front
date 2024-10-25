import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PostNewUserLoan } from "../../Services/SvBookLoan";

const UseGenerateNewUserLoan = () => {
  const navi = useNavigate();
  const goBack = () => {
    navi(-1);
  };
  return useMutation({
    mutationFn: PostNewUserLoan,
    onSuccess: () => {
      toast.success("Exito, préstamo generado correctamente");
      goBack();
    },
  });
};

export default UseGenerateNewUserLoan;
