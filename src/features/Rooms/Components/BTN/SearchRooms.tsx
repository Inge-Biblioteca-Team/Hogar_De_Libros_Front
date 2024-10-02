import { Label, Select, TextInput } from "flowbite-react";

const SearchRooms = ({
  RName,
  RStatus,
  RNumber,
}: {
    RName: (name: string) => void;
    RStatus: (ES: string) => void;
    RNumber: (num: string) => void;
}) => {
  return (
    <div className={`flex items-center gap-2`}>
      <div>
        <Label className="text-lg">Nombre de la Sala</Label>
        <TextInput
          type="text"
          placeholder="Nombre"
          onChange={(room) => RName(room.target.value)}
        />
      </div>
      <div>
        <Label className="text-lg">Estado</Label>
        <Select onChange={(room) => RStatus(room.target.value)}>
          <option value="">Seleccione un estado</option>
          <option value="F">Disponible</option>
          <option value="E">Mantenimiento</option>
          <option value="P">Clausurado</option>
        </Select>
      </div>
      <div>
        <Label className="text-lg">Número de Sala</Label>
        <Select onChange={(room) => RNumber(room.target.value)}>
          <option value="">Seleccione número de sala</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
      </div>
    </div>
  );
};

export default SearchRooms;