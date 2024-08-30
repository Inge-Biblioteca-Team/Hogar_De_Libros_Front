import { useMutation } from "react-query";
import { PostNewBook } from "../services/SvBooks";
import toast from "react-hot-toast";

const UseCreateNewBook = () => {
  const mutation = useMutation({
    mutationFn: PostNewBook,
    onSuccess: () => {
      toast.success('Book created successfully!');
    },
    onError: (error:Error) => {
      toast.error(`Error creating book: ${error.message}`);
    },
  });

  return {
    ...mutation,
    isLoading: mutation.isLoading,
  };
}

export default UseCreateNewBook

//Revisar ese loading que es muy rapido
// los estados bien