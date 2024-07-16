import { IRoom } from "../Types/Room_Interface";
import { useQuery } from "react-query";
import { GetRooms } from "../Services/SvRooms";
import RoomCard from "../Components/RoomCard";

// funcion que trae la informacion de las salas y las muestra en las tarjetas
function RoomList() {
  const {
    data: Rooms,
    isLoading,
    error,
  } = useQuery<IRoom[], Error>(["Rooms"], GetRooms);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <section className="w-4/5 flex flex-col items-center justify-center" id="Rooms">
        <h2 className="text-3xl pb-8">Nuestras salas</h2>
      <div className="flex w-full gap-5 items-center justify-center">
        {Rooms?.map((rooms: IRoom, index:number) => (
          <RoomCard Rooms={rooms} key={index} />
        ))}
      </div>
    </section>
  );
}

export default RoomList;

//Los IsLoading Y Error Se pueden hacer componentes resiclables
