import { useQuery } from "react-query";
import { GetRooms } from "../Services/SvRooms";
import { Room, RoomApiResponse } from "../Types/Room_Interface";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Carousel } from "flowbite-react";
import RoomCardForCarrousel from "../Components/RoomCardForCarrousel";

function RoomList() {
  const { data: Rooms, isLoading } = useQuery<RoomApiResponse, Error>(
    ["Rooms"],
    () => GetRooms(1, 5, "D"),
    {
      keepPreviousData: true,
      staleTime: 600,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      {isLoading && (
        <>
          <h2
            className="font-bold text-4xl text-center 
          max-sm:text-xl"
          >
            Nuestras salas
          </h2>
          <div
            className="bg-white w-full max-lg:w-full rounded-md p-2
                       h-[17rem] sm:h-[17rem] xl:h-[18rem] 2xl:h-[22rem] flex gap-3"
          >
            <div className="w-3/6">
              <Skeleton height={"99%"} width={"100%"} />
            </div>
            <div className="w-3/6">
              <Skeleton height={"10%"} width={"100%"} count={2} />
              <Skeleton height={"10%"} width={"80%"} count={4} />
            </div>
          </div>
        </>
      )}
      {!isLoading && Rooms && Rooms.count > 0 && (
        <>
          <div className="flex items-center flex-col space-y-4">
            <h2
              className="font-bold text-4xl text-center 
          max-sm:text-xl"
            >
              Nuestras Salas
            </h2>
            <Carousel
              className="Custom-Carousel"
              slideInterval={5000}
              slide={false}
            >
              {Rooms.data.map((room: Room) => (
                <RoomCardForCarrousel Rooms={room} key={"RO" + room.roomId} />
              ))}
            </Carousel>
          </div>
        </>
      )}
    </>
  );
}

export default RoomList;
