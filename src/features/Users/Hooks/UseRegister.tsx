import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { SignUp } from "../Services/SVAuth";
import { AxiosError } from "axios";

interface ErrorResponse {
  statusCode: number;
  message: string;
}

const UseRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: SignUp, 
    onSuccess: () => {
      toast.success("Registro Exitoso");
      navigate("/IniciarSesion");
    },
    onError:(error: AxiosError<ErrorResponse>) => {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Registro Erróneo");
      }
    },
  });
};

export default UseRegister;
