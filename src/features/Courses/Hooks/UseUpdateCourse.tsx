import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { editCourse } from "../services/SvCourses";

const UseUpdateCourse = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: editCourse,
      onSuccess: () => {
        queryClient.invalidateQueries("CourseMG");
        toast.success("Exito, curso editado correctamente");
      },
      onError: (error: ApiError) => {
        toast.error("Error al editar el curso: " + error.message);
      },
    });
  };

export default UseUpdateCourse
