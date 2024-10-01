import RoomCard from "../Components/RoomCard";
import { useQuery } from "react-query";
import { Alert, Breadcrumb } from "flowbite-react";
import { CurrentRoute, HomeRoute } from "../../Books/components/Redirections";
import { RoomApiResponse } from "../Types/Room_Interface";
import { GetRooms } from "../Services/SvRooms";

const ManageRoom = () => {
    
   
    const { data: rooms, error, isLoading } = useQuery<RoomApiResponse, Error>(
      "Rooms", 
      GetRooms,
      {
        staleTime: 600, 
      }
    );
  
    
    if (isLoading) return <span>Loading...</span>;
    if (error) return <span>Error: {error.message}</span>;

    const roomData = rooms?.data || []; 

    return (
      <>
        <Breadcrumb className="custom-breadcrumb pb-4">
          <HomeRoute />
          <CurrentRoute CurrentPage={"Gestión de Salas"} />
        </Breadcrumb>
        <section className="flex flex-col justify-center items-center">
          <div className="w-4/5 flex flex-col items-center justify-center pt-1">
            <div className="w-full pt-2">
            {roomData.length === 0 ? ( 
              <Alert color="warning" rounded>
                No existen salas disponibles.
              </Alert>
            ) : (
                <div className="grid grid-cols-3 gap-5"> 
                  {rooms?.data.map((room) => (
                    <RoomCard Rooms={room} key={room.roomId} /> 
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