import { useMutation, useQueryClient } from "react-query";
import { PatchUserByAdmin } from "../Services/SvUsuer";
import { User } from "../Type/UserType";
import toast from "react-hot-toast";
import { ApiError } from "../../../Types/ApiTypes";

const UseEditInfoUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: User) =>
      toast.promise(PatchUserByAdmin(data), {
        loading: "Editando...",
        success: <span>Éxito, usuario editado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al editar el usuario: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("UsersMG");
    },
  });
};

export default UseEditInfoUser;
