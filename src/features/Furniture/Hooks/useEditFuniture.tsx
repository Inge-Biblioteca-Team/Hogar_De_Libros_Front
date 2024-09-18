import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { FurnitureEdit } from "../type/furniture";
import { PatchEditFurniture } from "../services/SvFurniture";

const useEditFurniture = () => {
    return useMutation(
      ({ furniture, Id }: { furniture: FurnitureEdit; Id: string }) =>
        PatchEditFurniture(furniture, Id), 
      {
        onSuccess: () => {
          toast.success("Información de mueble actualizada con éxito");
        },
        onError: (error) => {
          console.error("Error al editar mueble:", error);
        },
      }
    );
  };
  
  export default useEditFurniture;

  