import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { SignUp } from "../Services/SVAuth";
import { RegisterInfo } from "../Type/UserType";
import { ApiError } from "../../../Types/ApiTypes";

const UseRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: RegisterInfo) =>
      toast.promise(SignUp(data), {
        loading: "Registrando...",
        success: <span>Registro exitoso</span>,
        error: (error: ApiError) => (
          <span>Error durante el registro: {error.message}</span>
        ),
      }),
    onSuccess() {
      navigate("/IniciarSesion");
    },
  });
};

export default UseRegister;
