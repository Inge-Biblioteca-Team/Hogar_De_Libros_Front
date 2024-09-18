import { useMutation, useQueryClient } from "react-query";
import { DownFurniture } from "../services/SvFurniture";

const UseDownEquip = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (Id: string) => {
      const data = await DownFurniture(Id);
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("EquipCatalog");
        console.log("Estado actualizado correctamente:", data);
      },
      onError: (error) => {
        console.error("Error actualizando el estado:", error);
      },
    }
  );
};

export default UseDownEquip;
