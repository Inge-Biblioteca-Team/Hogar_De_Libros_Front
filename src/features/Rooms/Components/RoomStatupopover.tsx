import { Button } from "flowbite-react";
import { HiAdjustments } from "react-icons/hi";
import { FaExclamationTriangle } from "react-icons/fa";
import useActionRoom from "../Hooks/useActionRoom";
import { Room } from "../Types/Room_Interface";
import { downType } from "../../../Types/GlobalTypes";

const RoomStatusPopover = ({ room }: { room: Room }) => {
  const { mutate: changeroom } = useActionRoom();

  const onConfirm = async (data: downType) => {
    changeroom(data);
  };

  return (
    <div className="flex flex-col">
      {room.status === "D" && (
        <>
          <Button
            color="gray"
            onClick={() =>
              onConfirm({ reason: "closed", Id: room.roomId.toString() })
            }
          >
            <FaExclamationTriangle className="mr-3 h-4 w-4" />
            Clausurada
          </Button>
          <Button
            color="gray"
            onClick={() =>
              onConfirm({ reason: "maintenance", Id: room.roomId.toString() })
            }
          >
            <HiAdjustments className="mr-3 h-4 w-4" />
            Mantenimiento
          </Button>
        </>
      )}

      {room.status === "C" && (
        <Button
          color="gray"
          onClick={() =>
            onConfirm({ reason: "available", Id: room.roomId.toString() })
          }
        >
          <HiAdjustments className="mr-3 h-4 w-4" />
          Reabrir
        </Button>
      )}

      {room.status === "M" && (
        <Button
          color="gray"
          onClick={() =>
            onConfirm({ reason: "available", Id: room.roomId.toString() })
          }
        >
          <HiAdjustments className="mr-3 h-4 w-4" />
          Terminar mantenimiento
        </Button>
      )}
    </div>
  );
};

export default RoomStatusPopover;
