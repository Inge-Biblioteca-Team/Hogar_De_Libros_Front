import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { LogIn} from "../Services/SvUsuer";

const UseAuth =  () => {
    const navigate = useNavigate();
  
    return useMutation({
      mutationFn: LogIn,
      onSuccess: () => {
        toast.success("Inicio de Sesion Exitoso");
        navigate("/HogarDeLibros");
      },
      onError: () => {
        toast.error("Inicio de sesión Erroneo");
      },
    });
  };

export default UseAuth
