import { Button, Label, TextInput } from "flowbite-react";
import { FaFileSignature } from "react-icons/fa6";
const SearchInputs = ({
  setEndtDate,
  setSignaCode,
  setStartDate,
  clearSearch,
}: {
  setStartDate: (StartDate: string) => void;
  setEndtDate: (EndDate: string) => void;
  setSignaCode: (SignaCode: string) => void;
  clearSearch: () => void;
}) => {

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    const date = event.target.value;
    const time = " 00:00:00";
    const StarDate = date + time;
    setStartDate(StarDate)
    console.log(StarDate)
  };
  
  return (
    <div className="w-full grid grid-cols-4 gap-2 pb-4 items-end">
      <div>
        <Label className=" text-lg" htmlFor="InitialDate">
          Fecha de Solicitud
        </Label>
        <TextInput
          id="InitialDate"
          type="Date"
          onChange={handleStartDateChange}
        />
      </div>
      <div>
        <Label className=" text-lg">Fecha De Vencimiento</Label>
        <TextInput
          type="date"
          onChange={(event) => setEndtDate(event.target.value)}
        />
      </div>
      <div>
        <Label className=" text-lg">Código De Signatura</Label>
        <TextInput
          type="text"
          icon={FaFileSignature}
          placeholder="Codigo De Signaruta"
          onChange={(event) => setSignaCode(event.target.value)}
        />
      </div>
      <Button className=" h-10" color={"blue"} onClick={clearSearch}>
        Borrar Busqueda
      </Button>
    </div>
  );
};

export default SearchInputs;

