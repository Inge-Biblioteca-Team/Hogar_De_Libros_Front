import { useState } from "react";
import UseDebounce from "../../../hooks/UseDebounce";
import { useQuery } from "react-query";
import { RoomApiResponse } from "../Types/Room_Interface";
import { GetRooms } from "../Services/SvRooms";
import RoomCards from "../Components/Cards/RoomCards";
import CreateRooms from "../Components/Modal/CreateRoms";
import SearchRooms from "../Components/BTN/SearchRooms";
import { BreadCrumbManage } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import NoResults from "../../../components/NoResults";
import Loader from "../../../components/Loader";

const ManageRoom = () => {
  const [Sname, setName] = useState<string>("");
  const [SStatus, setSStatus] = useState<string>("");
  const [SNum, setNum] = useState<string>("");

  const Name = UseDebounce(Sname, 100);
  const Status = UseDebounce(SStatus, 100);
  const Num = UseDebounce(SNum, 100);

  const { data: rooms, isLoading } = useQuery<RoomApiResponse, Error>(
    ["Rooms", { Status, Num, Name }],
    () => GetRooms(1, 100, Status, Num, Name),
    {
      keepPreviousData: true,
      staleTime: 600,
    }
  );

  return (
    <>
      <BreadCrumbManage text="Salas" />
      <section className="flex w-full flex-col justify-center items-center px-3 gap-y-4 ">
        <div className="w-full flex items-end max-md:flex-col gap-y-3 justify-between">
          <SearchRooms RName={setName} RStatus={setSStatus} RNumber={setNum} />
          <CreateRooms />
        </div>
        {isLoading && (
          <div className=" w-full flex items-center justify-center">
            <Loader />
          </div>
        )}
        {!isLoading && rooms && rooms.count > 0 && (
          <div className="w-full grid gap-3 grid-cols-3 max-md:grid-cols-1">
            {rooms?.data.map((room) => (
              <RoomCards Rooms={room} key={room.roomId} />
            ))}
          </div>
        )}
        {!isLoading && (!rooms || rooms.count == 0) && <NoResults />}
      </section>
    </>
  );
};

export default ManageRoom;
