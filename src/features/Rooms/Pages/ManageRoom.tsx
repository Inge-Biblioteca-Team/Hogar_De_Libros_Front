import { useState } from "react";
import UseDebounce from "../../../hooks/UseDebounce";
import { useQuery } from "react-query";
import { RoomApiResponse } from "../Types/Room_Interface";
import { GetRooms } from "../Services/SvRooms";
import { Alert } from "flowbite-react";
import RoomCards from "../Components/Cards/RoomCards";
import CreateRooms from "../Components/MODALS/CreateRoms";
import SearchRooms from "../Components/BTN/SearchRooms";
import { BreadCrumbManage } from "../../../components/Breadcrumbs/BreadCrumbsItems";

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
      <section className="flex flex-col justify-center items-center">
        <div className="w-4/5 flex flex-col items-center justify-center pt-1">
          <div className="w-full flex justify-between items-end">
            <SearchRooms
              RName={setName}
              RStatus={setSStatus}
              RNumber={setNum}
            />
            <CreateRooms />
          </div>
          <div className="w-full pt-2">
            {rooms?.count === 0 ? (
              <Alert
                color="warning"
                rounded
                className=" mt-32 flex items-center"
              >
                No existen salas disponibles
              </Alert>
            ) : (
              <div className="grid grid-cols-2 gap-5 my-4">
                {rooms?.data.map((room) => (
                  <RoomCards Rooms={room} key={room.roomId} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageRoom;
