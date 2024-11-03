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
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));
        setCurrentUser(user);
        setIsLogged(true);
      }
    },
    onError() {
      toast("Su sesíon a expirado.");
      localStorage.setItem("isLogged", "false");
      localStorage.setItem("currentUser", "");
    },
  });
};

export default UseGetProfile;
