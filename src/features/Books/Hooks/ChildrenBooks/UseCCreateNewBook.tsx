import { useMutation } from "react-query";
import { PostNewBook } from "../../services/SvBooks";
import toast from "react-hot-toast";

const UseCCreateNewBook = () => {
  const mutation = useMutation({
    mutationFn: PostNewBook,
    onSuccess: () => {
      toast.success('Libro añadido con exito!');
    },
    onError: (error:Error) => {
      toast.error(`Error al añadir libro: ${error.message}`);
    },
  });

  return {
    ...mutation,
    isLoading: mutation.isLoading,
  };
}

export default UseCCreateNewBook

