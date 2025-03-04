import { useQuery } from "react-query";
import RoomCard from "../Components/RoomCard";
import { GetRooms } from "../Services/SvRooms";
import { Room, RoomApiResponse } from "../Types/Room_Interface";
import { Carousel } from "flowbite-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
          className=" lg:w-full max-md:max-w-4xl max-sm:max-w-full md:pl-2 md:pr-2 xl:pl-36 xl:pr-36 2xl:pl-48 2xl:pr-48 w-full flex flex-col items-center justify-center"
          id="Rooms"
        >
          <h2 className="font-bold text-2xl 2xl:text-4xl mb-6 lg:text-4xl pb-4">Nuestras salas</h2>

          <div className="w-full max-sm:max-w-full   sm:hidden relative">
            <Carousel
              indicators={false}
              leftControl={<FaChevronLeft className="hidden" />}
              rightControl={<FaChevronRight className="hidden" />}
            >
              {Rooms.data.map((room: Room) => (
                <div key={"RO" + room.roomId} className="flex justify-center">
                  <div className="lg:w-3/4 max-sm:max-w-full w-full max-sm:pr-4 max-sm:pl-4">
                    <RoomCard Rooms={room} />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="hidden sm:grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:gap-10 2xl:grid-cols-3 xl: gap-5 lg:w-[1024px] items-center justify-center">
            {Rooms.data.map((rooms: Room) => (
              <RoomCard Rooms={rooms} key={"RO" + rooms.roomId} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default RoomList;

//Los IsLoading Y Error Se pueden hacer componentes resiclables
