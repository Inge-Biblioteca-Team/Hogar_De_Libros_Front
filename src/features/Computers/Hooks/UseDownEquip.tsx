import { useMutation } from "react-query";
import { DownEquipment } from "../Services/SvComputer";

const UseDownEquip = () => {
  return useMutation(
    async (Code: string) => {
      const data = await DownEquipment(Code);
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

export default UseDownEquip;

