import { useMutation } from "react-query";
import { EquipmentEdit } from "../types/Computer";
import { PutEditEquipment } from "../Services/SvComputer";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useEditComputer = () => {
  const navi = useNavigate();
  return useMutation(
    ({ equipment, Code }: { equipment: EquipmentEdit; Code: string }) =>
      PutEditEquipment(equipment, Code),
    {
      onSuccess: () => {
        toast.success("Informacion de equipo actualizada con Exito");
        navi(-1);
      },
      onError: (error) => {
        console.error("Error al editar Equipo:", error);
      },
    }
  );
};
export default useEditComputer;
