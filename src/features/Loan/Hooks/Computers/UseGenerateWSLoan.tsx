import { useMutation, useQueryClient } from "react-query";
import { CreateNewWSLoan } from "../../Services/SvComputerLoan";
import { NewWSLoan } from "../../Types/ComputerLoan";
import toast from "react-hot-toast";
interface ApiError {
  message: string;
  response?: {
    data?: {
      message?: string;
    };
  };
}

const UseGenerateWSLoan = () => {
    const queryClient = useQueryClient(); 
  return useMutation({
    mutationFn: (data: NewWSLoan) => CreateNewWSLoan(data),
    onSuccess: (data) => {
      console.log("New loan created successfully:", data);
      queryClient.invalidateQueries("WSStatus");
      toast.success(`Exito: Equipo en Uso`)
    },
    onError: (error:ApiError) => {
      if (error.response?.data?.message) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error("Error al crear el préstamo de equipo");
      }
      console.error("Error creating new loan:", error);
    },
  });
};

export default UseGenerateWSLoan;
