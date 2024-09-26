import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { DownCourse } from "../services/SvCourses";

const UseDownCourse = () => {
  const queryClient = useQueryClient();

  return useMutation(DownCourse, {
    onSuccess: () => {
      // toast.success("Curso deshabilitado.");
      alert("Curso dado de baja con éxito");
      queryClient.invalidateQueries("CursoMG");
    },
    onError: () => {
      toast.error("Error al actualizar al deshabilitar el Curso.");
    },
  });
};

export default UseDownCourse;