import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { RecoveryPassword } from "../Services/SVAuth";
import { recoveryRequest } from "../Type/Recovery";
import { ApiError } from "../../../Types/ApiTypes";

const UseRecoveryPassword =  () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data:recoveryRequest) =>
      toast.promise(RecoveryPassword(data), {
        loading: "Espere por favor...",
        success:"En breve llegara un correo con las instrucciones para cambiar su contraseña",
        error: (error: ApiError) => (
          <span>Error al procesar la solicitud: {error.message}</span>
        ),
      }),
      onSuccess: () => {
        navigate("/");
      },
    },
  );
};

export default UseRecoveryPassword
