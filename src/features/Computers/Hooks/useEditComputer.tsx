import { useMutation } from "react-query";
import { EquipmentEdit } from "../types/Computer";
import { PutEditEquipment } from "../Services/SvComputer";

const useEditComputer = () => {
  return useMutation(
    ({ equipment, Code }: { equipment: EquipmentEdit; Code: string }) =>
      PutEditEquipment(equipment, Code),
    {
      onSuccess: (data) => {
        console.log("Equipment edited successfully:", data);
      },
      onError: (error) => {
        console.error("Error editing equipment:", error);
      },
    }
  );
};

export default useEditComputer;
