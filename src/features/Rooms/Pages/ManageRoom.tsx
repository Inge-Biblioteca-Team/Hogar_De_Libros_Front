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

const ManageRoom = () => {
  const [Sname, setName] = useState<string>("");
  const [SStatus, setSStatus] = useState<string>("");
  const [SNum, setNum] = useState<string>("");

  const Name = UseDebounce(Sname, 100);
  const Status = UseDebounce(SStatus, 100);
  const Num = UseDebounce(SNum, 100);

  const {
    data: rooms,
    error,
    isLoading,
  } = useQuery<RoomApiResponse, Error>(
    ["Rooms", { Status, Num, Name }],
    () => GetRooms(1, 100, Status, Num, Name),
    {
      keepPreviousData: true,
      staleTime: 600,
    }
  );

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <>
      <BreadCrumbManage text="Salas" />
      <section className="flex md:w-full md:pl-4 md:pr-4 flex-col justify-center items-center">
        <div className="w-4/5 md:w-full  max-sm:w-full max-sm:p-2 flex lg:flex-col items-center justify-center pt-1">
          <div className="w-full lg:flex-row md:flex-col md:gap-4 max-sm:gap-4 max-sm:flex-col flex max-sm:items-center lg:justify-between items-end">
            <SearchRooms
              RName={setName}
              RStatus={setSStatus}
              RNumber={setNum}
            />
            <CreateRooms />
          </div>
          <div className="w-full pt-2">
            {rooms && rooms?.count > 0 ? (
              <div className="grid md:grid-cols-1 max-sm:grid-cols-1 lg:grid-cols-3 grid-cols-2 gap-5 my-4">
                {rooms?.data.map((room) => (
                  <RoomCards Rooms={room} key={room.roomId} />
                ))}
              </div>
            ) : (
              <NoResults />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageRoom;
