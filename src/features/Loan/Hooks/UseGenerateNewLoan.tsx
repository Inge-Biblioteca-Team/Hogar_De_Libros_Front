import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { PostNewLoan } from "../Services/SvBookLoan";
import { useNavigate } from "react-router-dom";

const UseGenerateNewLoan = () => {
  const navi = useNavigate()
  const goBack=()=>{
      navi(-2)
  }
  return useMutation({
    mutationFn: PostNewLoan,
    onSuccess: () => {
      toast.success("Prestamo Generado Con Exito!");
      goBack()
    },
  });
};

export default UseGenerateNewLoan;
