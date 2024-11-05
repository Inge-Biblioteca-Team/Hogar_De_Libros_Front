import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { editCourse } from "../services/SvCourses";
import { Courses } from "../types/Courses";

const UseUpdateCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Courses) =>
      toast.promise(editCourse(data), {
        loading: "Creando...",
        success: <span>Éxito, curso editado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al editar el curso: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("CourseMG");
    },
  });
};

export default UseUpdateCourse;
