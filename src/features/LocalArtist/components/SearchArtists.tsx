import { Label, Select, TextInput } from "flowbite-react";
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
    <div className="w-full max-sm:w-full max-sm:grid-cols-1 grid grid-cols-5 gap-2 pb-4">
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
        <Label className=" text-lg">Tipo de artista</Label>
        <Select
          required
          id="ArtisProfession"
          onChange={(event) => SType(event.target.value)}
        >
          <option value="">Seleccione el tipo de artista</option>
          <option value="Músico">Músico</option>
          <option value="Pintor">Pintor</option>
          <option value="Escritor">Escritor</option>
          <option value="Actor">Actor</option>
          <option value="Escultor">Escultor</option>
          <option value="Fotógrafo">Fotógrafo</option>
        </Select>
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
