import { useMutation, useQueryClient } from "react-query";
import { CancelEroll } from "../services/SvCourses";
import toast from "react-hot-toast";
import { ApiError } from "../../../Types/ApiTypes";

const UseCancelEnrollment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data:{courseID: number, userCedula: string}) =>
      toast.promise(CancelEroll(data), {
        loading: "Creando...",
        success: <span>Éxito, matricula cancelada correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al cancelar la matricula: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("MyCourseCatalog");
    },
  });
};

export default UseCancelEnrollment;
