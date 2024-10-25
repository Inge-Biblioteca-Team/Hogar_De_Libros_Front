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
        console.log("Exito, dio de baja correctamente el mueble:", data);
      },
      onError: (error) => {
        console.error("Error al dar de baja el mueble:", error);
      },
    }
  );
};

export default UseDownEquip;
