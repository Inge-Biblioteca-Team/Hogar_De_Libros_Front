import { Label, TextInput } from "flowbite-react";
import { FaFileSignature } from "react-icons/fa6";
const SearchInputs = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-2 pb-4">
      <div>
        <Label className=" text-lg" htmlFor="InitialDate">
          Fecha de Solicitud
        </Label>
        <TextInput id="InitialDate" type="Date" />
      </div>
      <div>
        <Label className=" text-lg">Fecha De Vencimiento</Label>
        <TextInput type="date" />
      </div>
      <div>
        <Label className=" text-lg">Fecha De Entrega</Label>
        <TextInput type="date" />
      </div>
      <div>
        <Label className=" text-lg">Código De Signatura</Label>
        <TextInput type="text" icon={FaFileSignature} placeholder="Codigo De Signaruta"/>
      </div>
    </div>
  );
};

export default SearchInputs;
