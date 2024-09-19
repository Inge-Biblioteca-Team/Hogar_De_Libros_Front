import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PostNewLoan } from "../../Services/SvBookLoan";

const UseGenerateNewLoan = () => {
  const navi = useNavigate()
  const goBack=()=>{
      navi(-2)
  }
  return useMutation({
    mutationFn: PostNewLoan,
    onSuccess: () => {
      toast.success("préstamo Generado Con Exito!");
      goBack()
    },
  });
};

export default UseGenerateNewLoan;
