import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { LogIn } from "../Services/SvUsuer";
import { useContext } from "react";
import UserContext from "../../../Context/UserContext/UserContext";



const UseAuth = () => {
  const navigate = useNavigate();
  const { setCurrentUser, setIsLogged } = useContext(UserContext);

  return useMutation({
    mutationFn: LogIn,
    onSuccess: (data) => {
      const { sub , email, role } = data;
      setCurrentUser({ cedula: sub, email, role });
      setIsLogged(true);
      toast.success("Inicio de Sesion Exitoso");
      navigate("/HogarDeLibros");
    },
    onError: () => {
      toast.error("Inicio de sesión Erroneo");
    },
  });
};

export default UseAuth;
