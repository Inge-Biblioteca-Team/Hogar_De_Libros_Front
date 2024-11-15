import { Button, Table } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import ReservationForm from "../../Pages/Rooms/ReservationForm";
import { queque } from "../../Types/RoomsReservations";
import { useQuery } from "react-query";
import { getRoomsList } from "../../Services/SVReservations";

const RoomsSchedule = ({
  date,
  reservations,
}: {
  date: string;
  reservations: queque[];
}) => {
  const { data: roomss = [] } = useQuery<queque[], Error>(
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

  const hours: number[] = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

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
    17: "5 PM",
  };

  const [open, setOpen] = useState(false);
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

  if (rooms.length === 0)
    return (
      <div className="w-full flex flex-col h-full justify-between text-center text-5xl mt-36">
        De momento no existen salas disponibles para reserva
      </div>
    );

  return (
    <div className="w-full flex flex-col h-full justify-between px-4 sm:px-6 md:px-8">
      <div className="font-bold text-center text-lg mb-3">
        Disponibilidad de salas
      </div>
      <div className="w-full overflow-x-auto">
        <Table className="w-full table-auto text-center">
          <Table.Head>
            <Table.HeadCell>NÚMERO DE SALA</Table.HeadCell>
            {hours.map((hour) => (
              <Table.HeadCell key={hour}>{HourMapping[hour]}</Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body>
            {rooms.map((room) => (
              <Table.Row key={room.roomNumber}>
                <Table.Cell className="font-semibold">{room.roomNumber}</Table.Cell>
                {hours.map((hour) => {
                  const isOccupied = occupiedHours[room.roomNumber]?.includes(hour);
                  const roomSelectedHours =
                    selectedRoom?.roomNumber === room.roomNumber ? selectedHours : [];

                  return (
                    <Table.Cell
                      key={hour}
                      onClick={() => {
                        if (!isOccupied) toggleHourSelection(room, hour);
                      }}
                      className={`p-2 border cursor-pointer ${roomSelectedHours.includes(hour)
                          ? "bg-blue-500 text-white"
                          : isOccupied
                            ? "bg-gray-300"
                            : "bg-white"
                        }`}
                      style={{ pointerEvents: isOccupied ? "none" : "auto" }}
                    />
                  );
                })}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <div className="mt-4 flex justify-center">
        <Button
          onClick={handleConfirmSelection}
          color="blue"
          disabled={roomss.length === 0}
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