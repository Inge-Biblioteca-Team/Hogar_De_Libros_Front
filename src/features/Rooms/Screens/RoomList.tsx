import { useQuery } from "react-query";
import RoomCard from "../Components/RoomCard";
import { GetRooms } from "../Services/SvRooms";
import { Room, RoomApiResponse } from "../Types/Room_Interface";
import { Carousel } from "flowbite-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function RoomList() {
  const { data: Rooms, isLoading } = useQuery<RoomApiResponse, Error>(
    ["Rooms"],
    () => GetRooms(1, 100, "D"),
    {
      keepPreviousData: true,
      staleTime: 600,
      refetchOnWindowFocus: false
    }
  );

  return (
    <>
        <h2
          className="font-bold text-4xl text-center 
          max-sm:text-xl"
        >
          Nuestras salas
        </h2>

        {isLoading ? (
          <div className="grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 max-sm:grid-cols-1 md:grid-cols-2 w-full h-full gap-8">
            <div className="w-[98%] h-[26rem] p-3 rounded-md bg-white">
              <Skeleton className="w-full h-56" />
              <Skeleton className="w-52 h-8" />
              <Skeleton className="w-20 h-8" />
              <Skeleton className="w-28 h-8" />
              <Skeleton className="w-36 h-8" />
            </div>

            {[...Array(2)].map((_, index) => (
              <div
                key={index + "RL"}
                className="w-[98%] h-[26rem] p-3 max-sm:hidden rounded-md bg-white"
              >
                <Skeleton className="w-full h-56" />
                <Skeleton className="w-52 h-8" />
                <Skeleton className="w-20 h-8" />
                <Skeleton className="w-28 h-8" />
                <Skeleton className="w-36 h-8" />
              </div>
            ))}
          </div>
        ) : (
          Rooms &&
          Rooms.count > 0 && (
            <>
              <div className="w-full max-sm:max-w-full relative 2xl:hidden">
                <Carousel
                  indicators={false}
                  leftControl={<FaChevronLeft className="hidden" />}
                  rightControl={<FaChevronRight className="hidden" />}
                >
                  {Rooms.data.map((room: Room) => (
                    <div
                      key={"RO" + room.roomId}
                      className="flex justify-center"
                    >
                      <div className="lg:w-3/4 max-sm:max-w-full w-full max-sm:pr-4 max-sm:pl-4">
                        <RoomCard Rooms={room} />
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>

              <div className=" hidden 2xl:grid grid-cols-3 gap-4">
                {Rooms.data.map((rooms: Room) => (
                  <RoomCard Rooms={rooms} key={"RO" + rooms.roomId} />
                ))}
              </div>
            </>
          )
        )}
    </>
  );
}

export default RoomList;

//Los IsLoading Y Error Se pueden hacer componentes resiclables
