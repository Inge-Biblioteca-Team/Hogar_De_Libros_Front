import { Button } from "flowbite-react";
import { HiAdjustments } from "react-icons/hi";
import { FaExclamationTriangle } from "react-icons/fa";
import useActionRoom from "../Hooks/useActionRoom";
import { Room } from "../Types/Room_Interface";


const RoomStatusPopover = ({ room }: { room: Room }) => {

    const { mutate: changeroom } = useActionRoom(); // No pasamos `accion` aquí

    const handleRoomStatusChange = (id: number, action: string) => {
        // Llamamos a `changeroom` con roomId y la acción
        changeroom({ roomId: id, action });
    };

    return (
        <div className="flex flex-col">
            {room.status === "D" && (
                <>
                    <Button
                        color="gray"
                        onClick={() => handleRoomStatusChange(room.roomId, "closed")}
                    >
                        <FaExclamationTriangle className="mr-3 h-4 w-4" />
                        Clausurada
                    </Button>
                    <Button
                        color="gray"
                        onClick={() => handleRoomStatusChange(room.roomId, "maintenance")}
                    >
                        <HiAdjustments className="mr-3 h-4 w-4" />
                        Mantenimiento
                    </Button>
                </>
            )}

            {room.status === "C" && (
                <Button
                    color="gray"
                    onClick={() => handleRoomStatusChange(room.roomId, "available")}
                >
                    <HiAdjustments className="mr-3 h-4 w-4" />
                    Reabrir
                </Button>
            )}

            {room.status === "M" && (
                <Button
                    color="gray"
                    onClick={() => handleRoomStatusChange(room.roomId, "available")}
                >
                    <HiAdjustments className="mr-3 h-4 w-4" />
                    Terminar Mantenimiento
                </Button>
            )}
        </div>
    );
};

export default RoomStatusPopover;