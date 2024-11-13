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
          className="max-w-4xl w-full flex flex-col items-center justify-center"
          id="Rooms"
        >
          <h2 className="font-bold text-2xl mb-6">Nuestras salas</h2>

          <div className="w-full sm:hidden relative">
            <Carousel
              indicators={false}
              leftControl={<FaChevronLeft className="hidden" />}
              rightControl={<FaChevronRight className="hidden" />}
            >
              {Rooms.data.map((room: Room) => (
                <div key={"RO" + room.roomId} className="flex justify-center">
                  <div className="w-3/4 ">
                    <RoomCard Rooms={room} />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:flex gap-5 w-full items-center justify-center">
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
