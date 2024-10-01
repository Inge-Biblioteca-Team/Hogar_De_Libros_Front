import { useMutation, useQueryClient } from "react-query";
import { EnrollToCourse } from "../services/Enrollment";
import { ApiError } from "../../../Types/ApiTypes";
import toast from "react-hot-toast";

const UseEnrollToCourse = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: EnrollToCourse,
      onSuccess: () => {
        queryClient.invalidateQueries("CourseMG");
        toast.success("Curso matriculado con éxito!");
      },
      onError: (error: ApiError) => {
        toast.error("Error al matricular el Curso: " + error.message);
      },
    });
  };
export default UseEnrollToCourse
