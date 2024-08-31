import { useMutation, useQueryClient } from "react-query";
import { PatchStatus } from "../services/SvBooks";

const UseDownActive = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (BookCode: string) => {
      const data = await PatchStatus(BookCode);
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("Bookcatalog");
        console.log("Estado actualizado correctamente:", data);
      },
      onError: (error) => {
        console.error("Error actualizando el estado:", error);
      },
    }
  );
};

export default UseDownActive;

