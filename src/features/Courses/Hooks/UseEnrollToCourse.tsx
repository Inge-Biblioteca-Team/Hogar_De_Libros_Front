import { useMutation, useQueryClient } from "react-query";
import { EnrollToCourse } from "../services/Enrollment";
import { ApiError } from "../../../Types/ApiTypes";
import toast from "react-hot-toast";
import { Enrollment } from "../types/Enroll";

const UseEnrollToCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Enrollment) =>
      toast.promise(EnrollToCourse(data), {
        loading: "Creando...",
        success: <span>Éxito, curso matriculado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al matricular el Curso: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("CourseCatalog");
    },
  });
};

export default UseEnrollToCourse
