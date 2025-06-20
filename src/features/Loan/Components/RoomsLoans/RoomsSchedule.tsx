import { Button, Table } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import ReservationForm from "../../Pages/Rooms/ReservationForm";
import { queque } from "../../Types/RoomsReservations";
import { useQuery } from "react-query";
import { getRoomsList } from "../../Services/SVReservations";
import Loader from "../../../../components/Loader";
const RoomsSchedule = ({
  date,
  reservations,
}: {
  date: string;
  reservations: queque[];
}) => {
  const { data: roomss = [], isLoading } = useQuery<queque[], Error>(
    ["QueQueReservations"],
    () => getRoomsList(),
    {
      staleTime: 600,
    }
  );

  const rooms = roomss.map((room) => ({
    roomNumber: room.roomNumber,
    roomId: room.roomId,
  }));

  const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16];

  const HourMapping: { [key: number]: string } = {
    8: "8 AM",
    9: "9 AM",
    10: "10 AM",
    11: "11 AM",
    12: "12 PM",
    13: "1 PM",
    14: "2 PM",
    15: "3 PM",
    16: "4 PM",
  };

  const [open, setOpen] = useState<boolean>(false);
  const [selectedRoom, setSelectedRoom] = useState<{
    roomId: number;
    roomNumber: string;
  } | null>(null);
  const [selectedHours, setSelectedHours] = useState<number[]>([]);

  const occupiedHours: { [room: string]: number[] } = {};
  reservations.forEach((reservation) => {
    const roomNumber = reservation.roomNumber;
    if (!occupiedHours[roomNumber]) {
      occupiedHours[roomNumber] = [];
    }
    reservation.selectedHours.forEach((hour) => {
      occupiedHours[roomNumber].push(parseInt(hour));
    });
  });

  const toggleHourSelection = (
    room: { roomId: number; roomNumber: string },
    hour: number
  ) => {
    if (selectedRoom?.roomNumber !== room.roomNumber) {
      setSelectedRoom(room);
      setSelectedHours([hour]);
    } else {
      setSelectedHours((prevSelected) => {
        const newSelectedHours = prevSelected.includes(hour)
          ? prevSelected.filter((h) => h !== hour)
          : [...prevSelected, hour];

        const minHour = Math.min(...newSelectedHours);
        const maxHour = Math.max(...newSelectedHours);
        const allHours = [];
        for (let h = minHour; h <= maxHour; h++) {
          allHours.push(h);
        }

        return allHours;
      });
    }
  };

  const handleConfirmSelection = () => {
    if (selectedRoom && selectedHours.length > 0) {
      setOpen(true);
    } else {
      toast.error("Por favor, selecciona una sala y al menos una hora.");
    }
  };

  const finishReservation = () => {
    setSelectedHours([]);
  };

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center mt-12">
        <Loader />
      </div>
    );
  }

  if (!isLoading && (!rooms || rooms.length) == 0)
    return (
      <div className="w-full flex flex-col h-full justify-between text-center text-5xl mt-36">
        De momento no existen salas disponibles para reserva
      </div>
    );

  return (
    <div className="w-full flex flex-col h-full justify-between">
      <div className="font-bold text-center text-lg">
        Disponibilidad de salas
      </div>
      <Table className="text-center h-80 mt-2 max-xl:hidden">
        <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
          <Table.HeadCell className="dark:bg-neutral-900 w-10">
            Número de sala
          </Table.HeadCell>
          {hours.map((hour) => (
            <Table.HeadCell key={hour} className="dark:bg-neutral-900">
              <div>{HourMapping[hour]}</div>
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="dark:bg-[#2d2d2d]">
          {rooms.map((room) => {
            const roomSelectedHours =
              selectedRoom?.roomNumber === room.roomNumber ? selectedHours : [];
            return (
              <Table.Row key={room.roomNumber}>
                <Table.Cell onClick={() => setSelectedRoom(room)}>
                  {room.roomNumber}
                </Table.Cell>
                {hours.map((hour) => {
                  const isOccupied =
                    occupiedHours[room.roomNumber]?.includes(hour);

                  return (
                    <Table.Cell
                      key={hour}
                      onClick={() => {
                        if (!isOccupied) toggleHourSelection(room, hour);
                      }}
                      className={`m-1 p-2 border ${
                        roomSelectedHours.includes(hour)
                          ? "dark:bg-gray-800 bg-blue-500"
                          : isOccupied
                          ? "dark:bg-gray-400 bg-gray-300"
                          : "dark:bg-[#2d2d2d] bg-white cursor-pointer"
                      }`}
                      style={{ pointerEvents: isOccupied ? "none" : "auto" }}
                    >
                      {" "}
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      <Table className="text-center mt-2 hidden max-xl:table bg-zinc-100 ">
        <Table.Head className="dark:[&>tr>th]:!bg-neutral-800 dark:text-white">
          <Table.HeadCell>Hora</Table.HeadCell>
          {rooms.map((room) => (
            <Table.HeadCell
              key={room.roomNumber}
              className="cursor-pointer"
              onClick={() => setSelectedRoom(room)}
            >
              Sala {room.roomNumber}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="dark:bg-[#2d2d2d]">
          {hours.map((hour) => (
            <Table.Row key={hour}>
              <Table.Cell className=" !bg-zinc-100" >{HourMapping[hour]}</Table.Cell>
              {rooms.map((room) => {
                const isOccupied =
                  occupiedHours[room.roomNumber]?.includes(hour);
                const roomSelectedHours =
                  selectedRoom?.roomNumber === room.roomNumber
                    ? selectedHours
                    : [];

                return (
                  <Table.Cell
                    key={`${room.roomNumber}-${hour}`}
                    onClick={() => {
                      if (!isOccupied) toggleHourSelection(room, hour);
                    }}
                    className={`border ${
                      roomSelectedHours.includes(hour)
                        ? "dark:bg-gray-800 bg-blue-500"
                        : isOccupied
                        ? "dark:bg-gray-400 bg-gray-300"
                        : "dark:bg-[#2d2d2d] bg-white cursor-pointer"
                    }`}
                    style={{ pointerEvents: isOccupied ? "none" : "auto" }}
                  >
                    {" "}
                  </Table.Cell>
                );
              })}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <div className="mt-4 flex w-full justify-start max-lg:justify-center ">
        <Button
          onClick={handleConfirmSelection}
          color={"blue"}
          disabled={roomss.length == 0}
          className="dark:bg-[#2d2d2d] dark:hover:bg-neutral-800 dark:focus:ring-neutral-700 max-lg:w-full"
        >
          Llenar formulario de solicitud
        </Button>
      </div>
      {selectedRoom && (
        <ReservationForm
          date={date}
          open={open}
          setOpen={setOpen}
          roomId={selectedRoom?.roomId.toString()}
          selectHours={selectedHours}
          finish={finishReservation}
        />
      )}
    </div>
  );
};

export default RoomsSchedule;
