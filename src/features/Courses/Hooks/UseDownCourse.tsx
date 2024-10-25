import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { DownCourse } from "../services/SvCourses";

const UseDownCourse = () => {
  const queryClient = useQueryClient();

  return useMutation(DownCourse, {
    onSuccess: () => {
      toast.success("Exito, curso deshabilitado correctamente.");
      queryClient.invalidateQueries("CursoMG");
    },
    onError: () => {
      toast.error("Error al deshabilitar el Curso.");
    },
  });
};

export default UseDownCourse;