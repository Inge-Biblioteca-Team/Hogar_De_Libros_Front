import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { LogIn } from "../Services/SvUsuer";
import { useContext } from "react";
import UserContext from "../../../Context/UserContext/UserContext";
import { SingIng } from "../Type/UserType";
import { ApiError } from "../../../Types/ApiTypes";
const UseAuth = () => {
  const navigate = useNavigate();
  const { setCurrentUser, setIsLogged } = useContext(UserContext);

  return useMutation({
    mutationFn: (data: SingIng) =>
      toast.promise(LogIn(data), {
        loading: "Espere por favor...",
        success: (data) => {
          const { message } = data;
          return <span>{message}</span>;
        },
        error: (error: ApiError) => (
          <span>Error al iniciar sesión: {error.message}</span>
        ),
      }),
    onSuccess(data) {
      if (data) {
        const { user } = data;
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));
        setCurrentUser(user);
        setIsLogged(true);
        navigate("/HogarDeLibros");
      }
    },
  });
};

export default UseAuth;
