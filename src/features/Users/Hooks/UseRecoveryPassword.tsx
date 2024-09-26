import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { RecoveryPassword } from "../Services/SVAuth";

const UseRecoveryPassword =  () => {
    const navigate = useNavigate();
  
    return useMutation({
      mutationFn: RecoveryPassword,
      onSuccess: () => {
        toast.success("Código Enviado al Correo");
        navigate("/HogarDeLibros");
      },
      onError: () => {
        toast.error("Error el correo no esta registrado");
      },
    });
  };

export default UseRecoveryPassword
