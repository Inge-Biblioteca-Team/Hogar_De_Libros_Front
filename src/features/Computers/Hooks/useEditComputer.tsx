import { useMutation } from "react-query";
import { EquipmentEdit } from "../types/Computer";
import { PutEditEquipment } from "../Services/SvComputer";


const useEditComputer = () => {
    return useMutation(
        ({ equipment, Code }: { equipment: EquipmentEdit; Code: string }) => PutEditEquipment(equipment, Code),
        {
          onSuccess: (data) => {
            console.log('Book edited successfully:', data);
          },
          onError: (error) => {
            console.error('Error editing book:', error);
          },
        }
      );
};

export default useEditComputer;