import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { ApiError } from '../../../Types/ApiTypes';
import { uploadAdviceImage } from '../Service/SvAdvice';


const UseUploadImage = () => {
  return useMutation({
    mutationFn: (file: File) =>
      toast.promise(uploadAdviceImage(file), {
        loading: "Subiendo imagen...",
        success: <span>Imagen subida correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al subir la imagen: {error.message}</span>
        ),
      }),
  });
};

export default UseUploadImage;
