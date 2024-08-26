import { useMutation } from "react-query";
import { PostNewBook } from "../services/SvBooks";

const UseCreateNewBook = () => {
    return useMutation({
        mutationFn: PostNewBook,
        onSuccess: () => {
          
          console.log('Book created successfully!');
        },
        onError: (error) => {
         
          console.error('Error creating book:', error);
        },
      });
}

export default UseCreateNewBook
