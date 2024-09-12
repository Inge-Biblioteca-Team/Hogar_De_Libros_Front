import { useMutation, useQueryClient } from "react-query";
import { CreateNewWSLoan } from "../../Services/SvComputerLoan";
import { NewWSLoan } from "../../Types/ComputerLoan";
import toast from "react-hot-toast";

const UseGenerateWSLoan = () => {
    const queryClient = useQueryClient(); 
  return useMutation({
    mutationFn: (data: NewWSLoan) => CreateNewWSLoan(data),
    onSuccess: (data) => {
      console.log("New loan created successfully:", data);
      queryClient.invalidateQueries("WSStatus");
      toast.success(`Equipo en Uso`)
    },
    onError: (error) => {
      console.error("Error creating new loan:", error);
    },
  });
};

export default UseGenerateWSLoan;
