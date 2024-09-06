import { useMutation, useQueryClient } from "react-query";
import { PatchStatus } from "../services/SvBooks";
import toast from "react-hot-toast";

const UseDownActive = (Category: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (BookCode: string) => {
      const data = await PatchStatus(BookCode, Category);
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("BookCatalog");
        queryClient.invalidateQueries("ChildrenCatalog");
        toast.success("Estado actualizado correctamente:", data);
      },
      onError: () => {
        toast.error("Error actualizando el estado:");
      },
    }
  );
};

export default UseDownActive;
