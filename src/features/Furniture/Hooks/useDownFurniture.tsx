import { useMutation, useQueryClient } from "react-query";
import { DownFurniture } from "../services/SvFurniture";

const UseDownEquip = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ Id, acction }: { Id: string; acction: string }) => {
      const data = await DownFurniture(Id, acction); 
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("FurnitureCatalog");
        console.log("Estado actualizado correctamente:", data);
      },
      onError: (error) => {
        console.error("Error actualizando el estado:", error);
      },
    }
  );
};

export default UseDownEquip;
