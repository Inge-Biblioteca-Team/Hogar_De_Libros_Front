import { Label, Select, TextInput } from "flowbite-react";
import { FaFileSignature } from "react-icons/fa6";
import { BsPersonSquare } from "react-icons/bs";

const SearchArtists = ({
  SName,
  SType,
  Status,
}: {
  SName: (Name: string) => void;
  SType: (Type: string) => void;
  Status: (Type: string) => void;
}) => {
  return (
    <div className="w-full grid grid-cols-5 gap-2 pb-4">
      <div>
        <Label className=" text-lg">Nombre</Label>
        <TextInput
          type="text"
          placeholder="Nombre"
          icon={BsPersonSquare}
          onChange={(event) => SName(event.target.value)}
        />
      </div>
      <div>
        <Label className=" text-lg">Tipo de Artista</Label>
        <TextInput
          type="text"
          icon={FaFileSignature}
          placeholder="Tipo"
          onChange={(event) => SType(event.target.value)}
        />
      </div>
      <div>
        <Label className=" text-lg">Estado</Label>
        <Select onChange={(event) => Status(event.target.value)}>
          <option value="">Seleccione un estado</option>
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </Select>
      </div>
    </div>
  );
};

export default SearchArtists;
