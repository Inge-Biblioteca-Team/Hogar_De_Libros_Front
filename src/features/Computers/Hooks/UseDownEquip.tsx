import { useMutation, useQueryClient } from "react-query";
import { DownEquipment } from "../Services/SvComputer";

const UseDownEquip = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (Code: string) => {
      const data = await DownEquipment(Code);
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
