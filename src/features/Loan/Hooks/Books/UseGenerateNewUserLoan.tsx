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
      toast.success("Prestamo Generado Con Exito!");
      goBack();
    },
  });
};

export default UseGenerateNewUserLoan;
