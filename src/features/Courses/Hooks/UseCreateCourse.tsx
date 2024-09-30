import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { CreateCourses } from "../services/SvCourses";

const UseCreateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CreateCourses,
    onSuccess: () => {
      queryClient.invalidateQueries("CourseMG");
      toast.success("Curso añadido con éxito!");
    },
    onError: (error: ApiError) => {
      toast.error("Error al crear el Curso: " + error.message);
    },
  });
};

export default UseCreateCourse;
