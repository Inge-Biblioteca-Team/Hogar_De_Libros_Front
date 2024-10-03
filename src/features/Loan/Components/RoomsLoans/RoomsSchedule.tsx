import { Button, Table } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import ReservationForm from "../../Pages/Rooms/ReservationForm";

const RoomsSchedule = ({ date }: { date: string }) => {
  const rooms = ["1", "2", "3"];
  const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

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

  const [open, setOpen] = useState<boolean>(false);
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");

  const [selectedRoom, setSelectedRoom] = useState<string>("");
  const [selectedHours, setSelectedHours] = useState<number[]>([]);

  const toggleHourSelection = (room: string, hour: number) => {
    if (selectedRoom !== room) {
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
      const startTime = Math.min(...selectedHours);
      const endTime = Math.max(...selectedHours);
      setStart(startTime.toString() + ":00:00");
      setEnd(endTime.toString() + ":00:00");
      setOpen(true);
    } else {
      toast.error("Por favor, selecciona una sala y al menos una hora.");
    }
  };

  return (
    <div className="w-full flex flex-col h-full justify-between">
      <div className=" font-bold text-center text-lg">
        Disponibiliad de salas
      </div>
      <Table className="text-center h-80 mt-2">
        <Table.Head>
          <Table.HeadCell className="w-10">Número de sala</Table.HeadCell>
          {hours.map((hour) => (
            <Table.HeadCell key={hour}>
              <div className="rotate-12">{HourMapping[hour]}</div>
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body>
          {rooms.map((room) => {
            const roomSelectedHours =
              selectedRoom === room ? selectedHours : [];
            return (
              <Table.Row key={room}>
                <Table.Cell onClick={() => setSelectedRoom(room)}>
                  {room}
                </Table.Cell>
                {hours.map((hour) => (
                  <Table.Cell
                    key={hour}
                    onClick={() => toggleHourSelection(room, hour)}
                    className={`m-1 p-2 border rounded ${
                      roomSelectedHours.includes(hour)
                        ? "bg-blue-500"
                        : "bg-white"
                    }`}
                  >
                    {" "}
                  </Table.Cell>
                ))}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <div className="mt-4">
        <Button onClick={handleConfirmSelection} color={"blue"}>
          Llenar formulario de solicitud
        </Button>
      </div>
      <ReservationForm
        date={date}
        open={open}
        setOpen={setOpen}
        start={start}
        end={end}
        roomId={selectedRoom}
      />
    </div>
  );
};
export default RoomsSchedule;
