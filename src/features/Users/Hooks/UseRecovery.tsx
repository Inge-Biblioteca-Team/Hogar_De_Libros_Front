import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { resetPassword } from "../Services/SVAuth";

const UseRecovery = () => {
  return useMutation(resetPassword, {
    onSuccess: () => {
      toast.success("Contraseña restablecida con éxito.");
    },
    onError: (error: Error) => {
      console.error(`Error: ${error.message}`);
    },
  });
};


export default UseRecovery
