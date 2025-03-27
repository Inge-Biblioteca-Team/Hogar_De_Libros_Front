import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { saveEnrollList } from "../services/Enrollment";

const UseSaveEnrollList = () => {
  return useMutation({
    mutationFn: async ({ courseID }: { courseID: number }) =>
      toast.promise(saveEnrollList(courseID), {
        loading: "Generando porfavor espere...",
        success: <span>Lista generada con éxito.</span>,
        error: (error: Error) => <span>Error al generar: {error.message}</span>,
      }),
  });
};

export default UseSaveEnrollList;
