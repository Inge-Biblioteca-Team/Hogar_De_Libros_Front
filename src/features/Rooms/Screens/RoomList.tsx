import { useQuery } from "react-query";
import { GetRooms } from "../Services/SvRooms";
import RoomCard from "../Components/RoomCard";
import { Room } from "../Types/Room_Interface";


function RoomList() {
  const {
    data: Rooms,
    isLoading,
    error,
  } = useQuery<Room[], Error>(["Rooms"], GetRooms);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <section className="w-4/5 flex flex-col items-center justify-center" id="Rooms">
        <h2 className="text-3xl pb-8">Nuestras salas</h2>
      <div className="flex w-full gap-5 items-center justify-center max-sm:gap-3 max-sm:grid max-sm:grid-cols-2">
        {Rooms?.map((rooms: Room, index:number) => (
          <RoomCard Rooms={rooms} key={index} />
        ))}
      </div>
    </section>
  );
}

export default RoomList;

//Los IsLoading Y Error Se pueden hacer componentes resiclables
