import { useEffect, useState } from "react";
import UseDebounce from "../../../hooks/UseDebounce";
import { useQuery } from "react-query";
import { RoomApiResponse } from "../Types/Room_Interface";
import { GetRooms } from "../Services/SvRooms";
import { Alert, Breadcrumb } from "flowbite-react";
import { CurrentRoute, HomeRoute } from "../../Books/components/Redirections";
import RoomCards from "../Components/Cards/RoomCards";


const ManageRoom = () => {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("RoomPage");
    return savedPage ? Number(savedPage) : 1;
  });


  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("RoomPage", page.toString());
  };

  useEffect(() => {
    sessionStorage.setItem("RoomPage", currentPage.toString());
  }, [currentPage]);

  const [limit, setCurrentLimit] = useState<number>(10);
  const [status, setStatus] = useState<string>("");
  const [searchRoomNumber, setSearchRoomNumber] = useState<string>("");
  const debouncedRoomNumber = UseDebounce(searchRoomNumber, 1000);

  const {
    data: rooms,
    error,
    isLoading,
  } = useQuery<RoomApiResponse, Error>(
    ["Rooms", { currentPage, limit, status, roomNumber: debouncedRoomNumber }],
    () => GetRooms(currentPage, limit, status, debouncedRoomNumber),
    {
      keepPreviousData: true,
      staleTime: 600,
    }
  );

  const MaxPage = Math.ceil((rooms?.count ?? 0) / limit);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <>
      <Breadcrumb className="custom-breadcrumb pb-4">
        <HomeRoute />
        <CurrentRoute CurrentPage={"Gestión de Salas"} />
      </Breadcrumb>
      <section className="flex flex-col justify-center items-center">
        <div className="w-4/5 flex flex-col items-center justify-center pt-1">
          <div className="w-full flex justify-between">

            {/* Aquí puedes incluir boton de agregar y los filtros  */}
          </div>
          <div className="w-full pt-2">
            {rooms?.count === 0 ? (
              <Alert color="warning" rounded>
                No existen salas disponibles que coincidan con su búsqueda
              </Alert>
            ) : (
              <div className="grid grid-cols-3 gap-5">
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