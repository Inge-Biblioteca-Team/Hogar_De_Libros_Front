import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { DownCourse } from "../services/SvCourses";

const UseCancelCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      toast.promise(DownCourse(id), {
        loading: "Cancelando...",
        success: <span>Éxito, curso cancelado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al cancelar el recurso: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("CourseMG");
    },
  });
};

export default UseCancelCourse
