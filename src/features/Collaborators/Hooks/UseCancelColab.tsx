import { CancelColab } from '../Service/ColabServices';
import toast from 'react-hot-toast';
import { useQueryClient, useMutation } from 'react-query';
import { ApiError } from '../../../Types/ApiTypes';
import { downType } from '../../../Types/GlobalTypes';

const UseCancelColab = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: downType) =>
        toast.promise(CancelColab(data), {
          loading: "Guardando...",
          success: <span>Éxito, rechazado correctamente</span>,
          error: (error: ApiError) => (
            <span>Error al rechazar: {error.message}</span>
          ),
        }),
      onSuccess() {
        queryClient.invalidateQueries("ColaborationsList");
        queryClient.invalidateQueries("ColaborationsAproved");
      },
    });
  };
  

export default UseCancelColab
