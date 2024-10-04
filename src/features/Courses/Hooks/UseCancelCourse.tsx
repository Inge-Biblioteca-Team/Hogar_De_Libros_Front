import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";
import { DownCourse } from "../services/SvCourses";

const UseCancelCourse = () => {
    const queryClient = useQueryClient();
    return useMutation(
      async (Id: number) => {
        const data = await DownCourse(Id);
        return data;
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("CourseMG");
          toast.success("Estado Actualizado Correctamente");
        },
        onError: (error: ApiError) => {
          toast.error(
            "Error al crear el programa para el Numero de registo " +
              error.message
          );
        },
      }
    );
  };

export default UseCancelCourse
