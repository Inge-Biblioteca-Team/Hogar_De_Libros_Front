import toast from "react-hot-toast";
import { ActionRoom } from "../Services/SvRooms";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../../Types/ApiTypes";


const useActionRoom = () => {

    const queryClient = useQueryClient();

    return useMutation(
        async ({ roomId, action }: { roomId: number, action: string }) => {
            const data = await ActionRoom(roomId, action)
            return data;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("Rooms");
                toast.success("Exito, se a editado el estado de la sala correctamente");
            },
            onError: (error: ApiError) => {
                toast.error("Error al editar el estado de salas: " + error.message)
            }
        }
    );
};

export default useActionRoom;

