import { useMutation, useQueryClient } from "react-query";
import { CancelEroll } from "../services/SvCourses";
import toast from "react-hot-toast";
interface ApiError {
    message: string;
    error: string;
    statusCode: number;
  }
const UseCancelEnrollment = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ courseId, userCedula }: { courseId: number; userCedula: string }) =>
      CancelEroll(courseId, userCedula),
    {
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries("MyCourseCatalog");
      },
      onError: (error:ApiError) => {
        if (error.message) {
          toast.error(error.message);
        } else {
          toast.error("Error inesperado al cancelar la matrícula");
        }
      },
    }
  );
};

export default UseCancelEnrollment;
