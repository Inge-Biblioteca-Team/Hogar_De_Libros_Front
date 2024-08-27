import { useMutation } from "react-query";
import { PatchStatus } from "../services/SvBooks";

const UseDownActive = () => {
  return useMutation(
    async (BookCode: string) => {
      const data = await PatchStatus(BookCode);
      return data;
    },
    {
      onSuccess: (data) => {
        console.log("Estado actualizado correctamente:", data);
      },
      onError: (error) => {
        console.error("Error actualizando el estado:", error);
      },
    }
  );
};

export default UseDownActive;

