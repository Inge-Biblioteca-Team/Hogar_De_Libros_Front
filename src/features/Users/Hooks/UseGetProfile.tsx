import { useContext } from "react";
import UserContext from "../../../Context/UserContext/UserContext";
import { useMutation } from "react-query";
import { getProfile } from "../Services/SVAuth";
import toast from "react-hot-toast";

const UseGetProfile = () => {
  const { setCurrentUser, setIsLogged } = useContext(UserContext);
  return useMutation(getProfile, {
    onSuccess(data) {
      if (data) {
        const { user } = data;
        setCurrentUser(user);
        setIsLogged(true);
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));
      }
    },
    onError() {
      toast("Su sesión a expirado.");
      localStorage.removeItem("isLogged");
      localStorage.removeItem("currentUser");
    },
  });
};

export default UseGetProfile;
