import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { ApiError } from "../Types/ApiTypes";
import { uploadNewImage } from "../Services/SvImageLoad";
import { uploadImage } from "../Types/GlobalTypes";

const UseUploadImage = () => {
  return useMutation({
    mutationFn: ({ image, folder }: uploadImage) =>
      toast.promise(uploadNewImage(image, folder), {
        loading: "Subiendo imagen...",
        success: <span>Imagen subida correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al subir la imagen: {error.message}</span>
        ),
      }),
  });
};

export default UseUploadImage;
