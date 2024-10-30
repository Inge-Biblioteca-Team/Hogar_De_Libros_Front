import { useContext } from "react";
import UserContext from "../../../Context/UserContext/UserContext";
import { LogOut } from "../Services/SVAuth";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ApiError } from "../../../Types/ApiTypes";

const UseLogOut = () => {
  const navigate = useNavigate();
  const { setCurrentUser, setIsLogged } = useContext(UserContext);
  return useMutation({
    mutationFn: () =>
      toast.promise(LogOut(), {
        loading: "Espere por favor...",
        success: "Esperamos vuelvas pronto",
        error: (error: ApiError) => (
          <span>Error al cerrar sesión: {error.message}</span>
        ),
      }),
    onSuccess() {
      localStorage.setItem("isLogged", "false");
      localStorage.setItem("currentUser", "");
      setCurrentUser(null);
      setIsLogged(false);
      navigate("/");
    },
  });
};

export default UseLogOut;
