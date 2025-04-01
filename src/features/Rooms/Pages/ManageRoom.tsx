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
import Loader from "../../OPAC/Assets/LoaderOPAC.gif";

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
      <section className="flex w-full md:px-4 flex-col justify-center items-center max-sm:px-2">
        <div className="w-full flex lg:flex-col items-center justify-center pt-1">
          <div className="w-full lg:flex-row md:flex-col md:gap-4 max-sm:gap-4 max-sm:flex-col flex max-sm:items-center lg:justify-between items-end">
            <SearchRooms
              RName={setName}
              RStatus={setSStatus}
              RNumber={setNum}
            />
            <CreateRooms />
          </div>
        </div>
        <div className="w-full pt-2">
          {isLoading ? (
            <div className=" w-full flex items-center justify-center">
              <figure>
                <img width={400} src={Loader} alt="...Cargando" />
                <figcaption className=" text-center">...Cargando</figcaption>
              </figure>
            </div>
          ) : rooms ? (
            <div className="grid max-sm:grid-cols-1 grid-cols-3 gap-5 my-4">
              {rooms?.data.map((room) => (
                <RoomCards Rooms={room} key={room.roomId} />
              ))}
            </div>
          ) : (
            <NoResults />
          )}
        </div>
      </section>
    </>
  );
};

export default ManageRoom;
