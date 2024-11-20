import { Label, Select, TextInput } from "flowbite-react";
import { queque } from "../../../Loan/Types/RoomsReservations";
import { useQuery } from "react-query";
import { getRoomsList } from "../../../Loan/Services/SVReservations";

const SearchRooms = ({
  RName,
  RStatus,
  RNumber,
}: {
  RName: (name: string) => void;
  RStatus: (ES: string) => void;
  RNumber: (num: string) => void;
}) => {
  const { data: roomss = [] } = useQuery<queque[], Error>(
    ["QueQueReservations"],
    () => getRoomsList(),
    {
      staleTime: 600,
    }
  );
  return (
    <div className={`flex max-sm:w-full max-sm:flex-col lg:flex-row items-center gap-2`}>
      <div className="max-sm:w-full">
        <Label className="text-lg ">Nombre de la Sala</Label>
        <TextInput
          type="text"
          placeholder="Nombre"
          onChange={(room) => RName(room.target.value)}
        />
      </div>
      <div className="max-sm:w-full">
        <Label className="text-lg">Estado</Label>
        <Select onChange={(room) => RStatus(room.target.value)}>
          <option value="">Seleccione un estado</option>
          <option value="D">Disponible</option>
          <option value="M">Mantenimiento</option>
          <option value="C">Clausurado</option>
        </Select>
      </div>
      <div className="max-sm:w-full">
        <Label className="text-lg">Número de Sala</Label>
        <Select onChange={(room) => RNumber(room.target.value)}>
          <option value="">Seleccione número de sala</option>
          {roomss.length > 0 &&
            roomss.map((room) => (
              <option key={room.roomId} value={room.roomId}>{room.roomNumber} </option>
            ))}
        </Select>
      </div>
    </div>
  );
};

export default SearchRooms;
