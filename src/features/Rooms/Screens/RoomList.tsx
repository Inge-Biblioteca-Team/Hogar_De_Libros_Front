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
    <section
      className="w-4/5 flex flex-col items-center justify-center"
      id="Rooms"
    >
      {Rooms && Rooms.count > 0 && (
        <>
          <h2 className="text-3xl pb-8">Nuestras salas</h2>
          <div className="flex w-full gap-5 items-center justify-center max-sm:gap-3 max-sm:grid max-sm:grid-cols-2">
            {Rooms?.data.map((rooms: Room, index: number) => (
              <RoomCard Rooms={rooms} key={index} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default RoomList;

//Los IsLoading Y Error Se pueden hacer componentes resiclables
