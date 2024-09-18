import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FurnitureEdit } from "../type/furniture";
import { PatchEditFurniture } from "../services/SvFurniture";

const useEditFurniture = () => {
    const navigate = useNavigate();
    return useMutation(
      ({ furniture, Id }: { furniture: FurnitureEdit; Id: string }) =>
        PatchEditFurniture(furniture, Id), 
      {
        onSuccess: () => {
          toast.success("Información de mueble actualizada con éxito");
          navigate(-1);
        },
        onError: (error) => {
          console.error("Error al editar mueble:", error);
        },
      }
    );
  };
  
  export default useEditFurniture;

  