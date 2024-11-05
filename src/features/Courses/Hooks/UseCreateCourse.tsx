import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { CreateCourses } from "../services/SvCourses";
import { Courses } from "../types/Courses";

const UseCreateCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Courses) =>
      toast.promise(CreateCourses(data), {
        loading: "Creando...",
        success: <span>Éxito, recurso creado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al crear el recurso: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("CourseMG");
    },
  });
};

export default UseCreateCourse;
