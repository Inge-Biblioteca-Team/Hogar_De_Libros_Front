import { useMutation, useQueryClient } from "react-query";
import { DownEquipment } from "../Services/SvComputer";
import toast from "react-hot-toast";

const UseDownEquip = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (Code: string) => {
      const data = await DownEquipment(Code);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("EquipCatalog");
        toast.success("Se dio de baja al equipo correctamente")
      },
      onError: (error) => {
        toast.error("Error al actualizar el estado")
        console.error("Error al dar de baja el equipo:", error);
      },
    }
  );
};

export default UseDownEquip;
