import { Label, TextInput } from "flowbite-react";
import { FaFileSignature } from "react-icons/fa6";
import { BsPersonSquare } from "react-icons/bs";


const SearchArtists = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-2 pb-4">
      <div>
        <Label className=" text-lg">Nombre</Label>
        <TextInput type="text" placeholder="Nombre" icon={BsPersonSquare} />
      </div>
      <div>
        <Label className=" text-lg">Tipo de Artista</Label>
        <TextInput
          type="text"
          icon={FaFileSignature}
          placeholder="Tipo"
        />
      </div>
    </div>
  );
};

export default SearchArtists;
