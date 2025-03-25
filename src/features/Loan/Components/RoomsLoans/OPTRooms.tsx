import { useQuery } from "react-query";
import { getRoomsList } from "../../Services/SVReservations";
import { queque } from "../../Types/RoomsReservations";

const OPTRooms = () => {
  const { data: rooms = [] } = useQuery<queque[], Error>(
    ["RoomsList"],
    () => getRoomsList(),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      {rooms.map((room) => (
        <option key={"RO" + room.roomId} value={room.roomId}>
          {room.roomNumber}{" "}
        </option>
      ))}
    </>
  );
};

export default OPTRooms;
