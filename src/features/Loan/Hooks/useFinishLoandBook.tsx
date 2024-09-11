import { useMutation } from "react-query";
import { finalizeLoan } from "../Services/SvBookLoan";

const useFinalizeLoan = () => {
    const mutation = useMutation({
      mutationFn: finalizeLoan,
      onSuccess: () => {
        
        console.log('Préstamo finalizado exitosamente');
      },
      onError: (error) => {
        
        console.error('Error al finalizar el préstamo:', error);
      },
    });
  
    return mutation;
  };
  
  export default useFinalizeLoan;