import { useQuery } from "react-query";
import RoomCard from "../Components/RoomCard";
import { GetRooms } from "../Services/SvRooms";
import { Room, RoomApiResponse } from "../Types/Room_Interface";

function RoomList() {
  const { data: Rooms } = useQuery<RoomApiResponse, Error>(
    ["Rooms"],
    () => GetRooms(1, 100),
    {
      keepPreviousData: true,
      staleTime: 600,
    }
  );

  return (
    <>
      {Rooms && Rooms.count > 0 && (
        <section
          className="max-w-4xl w-full flex flex-col items-center justify-center"
          id="Rooms"
        >
          {Rooms && Rooms.count > 0 && (
            <>
              <h2 className="font-bold text-3xl mb-6 ">Nuestras salas</h2>
              <div className="flex w-full gap-5 items-center justify-center max-sm:gap-3 max-sm:grid max-sm:grid-cols-2">
                {Rooms?.data.map((rooms: Room) => (
                  <RoomCard Rooms={rooms} key={"RO" + rooms.roomId} />
                ))}
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
}

export default RoomList;

//Los IsLoading Y Error Se pueden hacer componentes resiclables
